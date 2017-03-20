'use strict';

const {Component, PropTypes} = require('react');
const {genericName, omitNonStandardAttrs} = require('../lib/util');
const {genericId} = require('../lib/identity');
const {isUndefined, noop} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  l: require('../style/tumbler/tumbler-l.css'),
  m: require('../style/tumbler/tumbler-m.css'),
  s: require('../style/tumbler/tumbler-s.css'),
};

class Tumbler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || genericId(),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: isUndefined(nextProps.id)
        ? this.state.id
        : nextProps.id,
    });
  }

  css = tokenName => genericName(this.props, tokenName)

  focus() {
    if (!this._input) return;
    this._input.focus();
  }

  _onChange = e => {
    const {checked, value} = e.target;

    this.props.onChange(e, {checked, value});
  }

  render() {
    const {className, offText, onText, ...props} = this.props;
    const {id} = this.state;

    const {css} = this;

    // why this looks like a pie,
    // see: http://stackoverflow.com/questions/9273016/why-is-this-inline-block-element-pushed-downward
    return (
      <span
        {...omitNonStandardAttrs(props)}
        className={cc(css('wrapper'), className)}
        onChange={void 0}>
        <span className={css('baseline')}>
          <div className={css('shape')}>
            {this.renderInput()}
            <label
              className={css('control')}
              htmlFor={id}>
              <span className={css('label')}>{onText}</span>
              <span className={css('label')}>{offText}</span>
              <span className={css('delimiter')}>&nbsp;</span>
            </label>
          </div>
        </span>
      </span>
    );
  }

  renderInput() {
    const {
      checked,
      defaultChecked,
      disabled,
      onBlur,
      onFocus,
      name,
      value,
    } = this.props;

    const {id} = this.state;

    const {css} = this;

    return (
      <input
        checked={checked}
        className={css('native')}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={this._onChange}
        onFocus={onFocus}
        ref={r => this._input = r}
        type='checkbox'
        value={value}/>
    );
  }
}

Tumbler.defaultProps = {
  offText: 'Off',
  onText: 'On',
  onChange: noop,
  size: 'm',
  styles: cssModules,
};

Tumbler.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  offText: PropTypes.string,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onText: PropTypes.string,
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
  ]),
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = Tumbler;
