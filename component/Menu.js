'use strict';

const {Component} = require('react');
const Overlay = require('../view/Overlay');
const PropTypes = require('prop-types');
const React = require('react');
const cc = require('classnames');

const cssModules = require('../style/menu/menu.css');

class Menu extends Component {
  render() {
    const {
      children,
      className,
      direction,
      onOutsideClick,
      parentNode,
    } = this.props;

    return (
      <Overlay
        className={cc(cssModules.menu, cssModules[direction], className)}
        onOutsideClick={onOutsideClick}
        parentNode={parentNode}
        role='listbox'>
        {children}
      </Overlay>
    );
  }
}

Menu.defaultProps = {
  direction: 'bottom',
};

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf([
    'bottom',
    'top',
  ]),
  onOutsideClick: PropTypes.func,
  parentNode: PropTypes.func,
};

module.exports = Menu;
