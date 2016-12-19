'use strict';

const {Component, PropTypes} = require('react');
const {assign, map, noop, omit} = require('../lib/dash');
const {isControlled, genericName} = require('../lib/util');
const Box = require('../view/Box');
const React = require('react');
const cc = require('classnames');
const chunk = require('lodash.chunk');

const cssModules = {
  m: require('../style/checkGroup/checkGroup-m.css'),
  s: require('../style/checkGroup/checkGroup-s.css'),
};

const omitProps = omit([
  'options',
  'styles',
]);

class CheckGroup extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);

    const checkItems = this._checkItems = calculateCheckItems(props.options);
    const value = this.controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      values: mapValueToState(checkItems, value || []),
    };
  }

  componentWillReceiveProps(nextProps) {
    this._controlled = isControlled(nextProps);

    const {options} = this.props;
    const value = this._controlled
      ? nextProps.value
      : this.state.value;

    var values = this.state.values;

    if (nextProps.options !== options) {
      this._checkItems = calculateCheckItems(nextProps.options);
      values = mapValueToState(this._checkItems, value || []);
    }

    this.setState({values});
  }

  css = tokenName => {
    return genericName(this.props, tokenName);
  }

  focus = noop

  _onChange = (e, {checked}, position) => {
    const values = updateValue(this.state.values, position, checked);

    if (!this.controlled) {
      this.setState({values});
    }

    this.props.onChange(e, {
      value: mapStateToValue(this._checkItems, values),
    });
  }

  render() {
    const {
      className,
      cols,
      disabled,
      name,
      ...other,
    } = this.props;

    const {values} = this.state;

    const {css} = this;
    const styles = css();

    const checks = map(item =>
      this.renderCheck({
        ...item,
        checked: values[item._position],
        disabled,
        key: `${item._position}${item.value}`,
        name,
        onChange: this._onChange,
        position: item._position,
        styles,
      }), this._checkItems);

    var index = 0;
    const columns = map(children =>
      this.renderColumn({
        children,
        className: css('column'),
        key: ++index,
      }), chunk(checks, Math.ceil(this._checkItems.length / cols)));

    return (
      <div
        {...omitProps(other)}
        className={cc(css('container'), className)}>
        {columns}
      </div>
    );
  }

  renderColumn(columnProps) {
    return (
      <div {...columnProps}/>
    );
  }

  renderCheck(checkProps) {
    return (
      <Box {...checkProps}/>
    );
  }
}

CheckGroup.defaultProps = {
  cols: 1,
  onChange: noop,
  size: 's',
  styles: cssModules,
};

CheckGroup.propTypes = {
  cols: PropTypes.number,
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  size: PropTypes.oneOf([
    's',
    'm',
  ]),
  styles: PropTypes.object,
  value: PropTypes.arrayOf(PropTypes.string),
};

module.exports = CheckGroup;

// calculateMenuItems :: (a -> q -> bool) -> [a] -> q -> [b]
function calculateCheckItems(items = []) {
  const length = items.length;
  const nextItems = Array(length);

  for (var i = 0; i < length; ++i)
    nextItems[i] = assign(items[i], {_position: i});

  return nextItems;
}

function mapStateToValue(options, values) {
  const selected = [];

  for (var i = 0; i < values.length; ++i) {
    if (!values[i]) {
      continue;
    }

    selected.push(options[i].value);
  }

  return selected;
}

function mapValueToState(options, selected) {
  const selectedMap = {};

  var length = selected.length;
  while (length--) {
    selectedMap[selected[length]] = null;
  }

  return map(({value}) => value in selectedMap, options);
}

function updateValue(values, position, target) {
  return values.map((value, i) => position !== i ? value : target);
}
