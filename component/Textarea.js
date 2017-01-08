'use strict';

const {Component, PropTypes} = require('react');
const {filterProps, genericName} = require('../lib/util');
const {noop} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  l: require('../style/textarea/textarea-l.css'),
  m: require('../style/textarea/textarea-m.css'),
  s: require('../style/textarea/textarea-s.css'),
};

class Textarea extends Component {
  css = tokenName => genericName(this.props, tokenName)

  focus() {
    if (!this._textarea) return;
    this._textarea.focus();
  }

  select() {
    if (!this._textarea) return;
    this._textarea.select();
  }

  _onChange = e => {
    const value = e.target.value;
    this.props.onChange(e, {value});
  }

  render() {
    const {
      autoComplete,
      autoFocus,
      className,
      children,
      cols,
      defaultValue,
      disabled,
      id,
      maxLength,
      name,
      placeholder,
      readOnly,
      rows,
      value,
    } = this.props;

    const {css} = this;

    return (
      <textarea
        {...filterProps(this.props)}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={cc(css('control'), className)}
        cols={cols}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={name}
        onChange={this._onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        ref={r => this._textarea = r}
        value={value}>
        {children}
      </textarea>
    );
  }
}

Textarea.defaultProps = {
  onChange: noop,
  size: 'm',
  styles: cssModules,
  rows: 3,
};

Textarea.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
  ]),
  styles: PropTypes.object,
};

module.exports = Textarea;
