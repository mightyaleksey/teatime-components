'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const React = require('react');
const cx = require('classnames');

class Input extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;

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
    const { className, id, styleName, styles, ...o } = this.props;
    const { value } = this.state;

    const clearElement = value && !this.props.disabled
      ? (<span className={styles.clear} onClick={this.onClearClick}/>)
      : null;

    return (
      <span className={cx(className, styles[styleName])}>
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
  styles: PropTypes.object,
  type:  PropTypes.oneOf([
    'password',
    'text',
  ]),
};

module.exports = Input;
