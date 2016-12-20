'use strict';

const {Component, PropTypes} = require('react');
const {genericName} = require('../lib/util');
const {noop, omit} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  m: require('../style/textarea/textarea-m.css'),
  s: require('../style/textarea/textarea-s.css'),
};

const omitProps = omit([
  'size',
  'styles',
]);

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

  _onChange = ({target}) => {
    this.props.onChange(e, {value: target.value});
  }

  render() {
    const {
      className,
      ...other,
    } = this.props;

    const {css} = this;

    return (
      <textarea
        {...omitProps(other)}
        className={cc(css('control'), className)}
        ref={r => this._textarea = r}/>
    );
  }
}

Textarea.defaultProps = {
  onChange: noop,
  size: 's',
  styles: cssModules,
  rows: 3,
};

Textarea.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    'm',
    's',
  ]),
  styles: PropTypes.object,
};

module.exports = Textarea;
