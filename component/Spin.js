'use strict';

const {Component, PropTypes} = require('react');
const {filterProps, genericName} = require('../lib/util');
const {noop} = require('../lib/dash');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  l: require('../style/spin/spin-l.css'),
  m: require('../style/spin/spin-m.css'),
  s: require('../style/spin/spin-s.css'),
  xs: require('../style/spin/spin-xs.css'),
};

class Spin extends Component {
  css = tokenName => genericName(this.props, tokenName)

  focus = noop

  render() {
    const {className, id} = this.props;
    const {css} = this;

    return (
      <span
        {...filterProps(this.props)}
        className={cc(css('wrapper'), className)}
        id={id}>
        <i className={css('control')}/>
      </span>
    );
  }
}

Spin.defaultProps = {
  size: 'm',
  styles: cssModules,
};

Spin.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
    'xs',
  ]),
  styles: PropTypes.object,
};

module.exports = Spin;
