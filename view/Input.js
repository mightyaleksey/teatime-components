'use strict';

const { PropTypes } = require('react');
const { bind, hasValueProp } = require('../tool/component');
const { isUndefined, noop } = require('../tool/func');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');
const classNames = require('classnames');
const warning = require('../tool/warning');

var didWarnForDefaultValue = false;

class Input extends TeatimeComponent {
  constructor(props) {
    super(props);

    this.controlled = hasValueProp(props);

    if (process.env.NODE_ENV !== 'production' && this.controlled && !didWarnForDefaultValue) { // eslint-disable-line no-undef
      warning(isUndefined(props.defaultValue),
        'Input contains an input of type %s with both value and defaultValue props. ' +
        'Input elements must be either controlled or uncontrolled ' +
        '(specify either the value prop, or the defaultValue prop, but not ' +
        'both). Decide between using a controlled or uncontrolled input ' +
        'element and remove one of these props. More info: ' +
        'https://fb.me/react-controlled-components',
        props.type);

      didWarnForDefaultValue = true;
    }

    const value = this.controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      value: !isUndefined(value)
        ? value
        : '',
    };

    bind(this, [
      'onChange',
      'onClearClick',
    ]);
  }

  componentWillReceiveProps(nextProps) {
    if (this.controlled) {
      this.setState({value: nextProps.value});
    }
  }

  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  onChange(e) {
    this.updateValue(e, e.target.value);
  }

  onClearClick(e) {
    if (this.props.disabled) {
      return;
    }

    this.updateValue(e, '');
    this.focus();
  }

  select() {
    if (this.refs.control) {
      this.refs.control.select();
    }
  }

  updateValue(e, value) {
    if (!this.controlled) {
      this.setState({value});
    }

    this.props.onChange(e, {value});
  }

  render() {
    return (
      <span className={this.style('wrapper')}>
        {this.renderInput()}
        {this.renderClear()}
      </span>
    );
  }

  renderClear() {
    if (!this.state.value || this.props.disabled) {
      return null;
    }

    return (
      <span
        className={this.style('clear')}
        onClick={this.onClearClick}/>
    );
  }

  renderInput() {
    return (
      <input
        {...this.knownProps()}
        className={classNames(this.style('control'), {
          [this.style('hasClear')]: this.state.value,
        })}
        defaultValue={undefined} // Cause we have a controlled input
        onChange={this.onChange}
        ref='control'
        value={this.state.value}/>
    );
  }
}

Input.defaultProps = {
  onChange: noop,
  type: 'text',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  styles: PropTypes.shape({
    clear: PropTypes.string.isRequired,
    control: PropTypes.string.isRequired,
    wrapper: PropTypes.string,
  }),
  type: PropTypes.oneOf([
    'password',
    'text',
  ]),
};

module.exports = Input;
