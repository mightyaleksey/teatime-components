'use strict';

const { Component, PropTypes } = require('react');
const { bind, hasValueProp } = require('../tool/component');
const { composition } = require('../tool/className');
const { noop } = require('../tool/func');
const React = require('react');
const warning = require('../tool/warning');

var didWarnForDefaultValue = false;

class Input extends Component {
  constructor(props) {
    super(props);

    this.controlled = hasValueProp(props);

    if (process.env.NODE_ENV !== 'production' && this.controlled && !didWarnForDefaultValue) { // eslint-disable-line no-undef
      warning(typeof props.defaultValue === 'undefined',
        'Input contains an input of type %s with both value and defaultValue props. ' +
        'Input elements must be either controlled or uncontrolled ' +
        '(specify either the value prop, or the defaultValue prop, but not ' +
        'both). Decide between using a controlled or uncontrolled input ' +
        'element and remove one of these props. More info: ' +
        'https://fb.me/react-controlled-components',
        props.type);

      didWarnForDefaultValue = true;
    }

    this.state = {
      value: props.value || props.defaultValue || '',
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
    const { id, styles, ...o } = this.props;
    const { value } = this.state;

    const clearElement = value && !this.props.disabled
      ? (<span className={styles.clear} onClick={this.onClearClick}/>)
      : null;

    return (
      <span className={composition(this.props)}>
        <input
          {...o}
          className={styles.control}
          defaultValue={undefined} // Cause we have a controlled input
          id={id}
          onChange={this.onChange}
          ref='control'
          value={value}/>
        {clearElement}
      </span>
    );
  }
}

Input.defaultProps = {
  onChange: noop,
  styleName: 'wrapper',
  styles: {},
  type: 'text',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  styleName: PropTypes.string,
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
