'use strict';

const { Component, PropTypes } = require('react');
const { genericId } = require('../lib/identity');
const { isUndefined, noop, omit, prop } = require('../lib/dash');
const { themes } = require('../lib/tool');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  m: require('../style/tumbler/tumbler-m.css'),
  s: require('../style/tumbler/tumbler-s.css'),
  xs: require('../style/tumbler/tumbler-xs.css'),
};

const omitProps = omit([
  'onChange',
  'size',
  'styles',
]);

class Tumbler extends Component {
  constructor(props) {
    super(props);

    this._styles = themes(this.token);

    this.state = {
      id: props.id || genericId(),
      styles: this._styles(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: isUndefined(nextProps.id) ? this.state.id : nextProps.id,
      styles: this._styles(nextProps),
    });
  }

  focus() {
    if (!this._input) return;
    this._input.focus();
  }

  token = prop('size')

  _onChange = (e) => {
    const { checked, value } = e.target;
    this.props.onChange(e, {checked, value});
  }

  render() {
    const {
      checked,
      className,
      defaultChecked,
      disabled,
      name,
      off,
      on,
      value,
      ...other,
    } = this.props;
    const {
      baseline,
      control,
      delimiter,
      label,
      native,
      shape,
      wrapper,
    } = this.state.styles;
    const id = this.state.id;

    // why it looks like a pie,
    // see: http://stackoverflow.com/questions/9273016/why-is-this-inline-block-element-pushed-downward
    return (
      <span
        {...omitProps(other)}
        className={cc(wrapper, className)}>
        <span className={baseline}>
          <div className={shape}>
            {this.renderInput({
              checked,
              className: native,
              defaultChecked,
              disabled,
              id,
              name,
              onChange: this._onChange,
              ref: r => this._input = r,
              type: 'checkbox',
              value,
            })}
            <label
              className={control}
              htmlFor={id}>
              <span className={label}>{on}</span>
              <span className={label}>{off}</span>
              <span className={delimiter}>&nbsp;</span>
            </label>
          </div>
        </span>
      </span>
    );
  }

  renderInput(inputProps) {
    return (
      <input {...inputProps}/>
    );
  }
}

Tumbler.defaultProps = {
  off: 'Off',
  on: 'On',
  onChange: noop,
  size: 's',
  styles: cssModules,
};

Tumbler.propTypes = {
  name: PropTypes.string.isRequired,
  off: PropTypes.string,
  on: PropTypes.string,
  onChange: React.PropTypes.func,
  size: PropTypes.oneOf([
    'm',
    's',
    'xs',
  ]),
  styles: PropTypes.object,
};

module.exports = Tumbler;
