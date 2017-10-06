'use strict';

const {Component} = require('react');
const Overlay = require('../view/_Overlay');
const PropTypes = require('prop-types');
const React = require('react');
const classNames = require('classnames');

const baseStyles = {
  'normal-l': require('../style/tooltip/tooltip-normal-l.css'),
  'normal-m': require('../style/tooltip/tooltip-normal-m.css'),
  'normal-s': require('../style/tooltip/tooltip-normal-s.css'),
  'success-l': require('../style/tooltip/tooltip-success-l.css'),
  'success-m': require('../style/tooltip/tooltip-success-m.css'),
  'success-s': require('../style/tooltip/tooltip-success-s.css'),
  'warning-l': require('../style/tooltip/tooltip-warning-l.css'),
  'warning-m': require('../style/tooltip/tooltip-warning-m.css'),
  'warning-s': require('../style/tooltip/tooltip-warning-s.css'),
};

const height = {
  l: 32,
  m: 28,
  s: 24,
};

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  /**
   * @param  {object} rect
   * @param  {number} rect.height
   * @param  {number} rect.left
   * @param  {number} rect.top
   * @param  {number} rect.width
   * @return {number}
   */
  calculatePosition = rect => {
    if (this.props.direction === 'bottom' || this.props.direction === 'top')
      return rect.top + (rect.left - rect.width / 2) / 10000;

    return rect.top - rect.height / 2 + rect.left / 10000;
  }

  componentWillReceiveProps(nextProps) {
    const {children, direction, size} = this.props;

    if (
      nextProps.children !== children ||
      nextProps.direction !== direction ||
      nextProps.size !== size
    )
      this.setState({
        isVisible: false,
      });
  }

  /**
   * @param  {object}  rect
   * @param  {number}  rect.height
   * @param  {number}  rect.width
   * @param  {number}  maxWidth
   * @return {boolean}
   */
  isMultiline(rect) {
    return rect.height > height[this.props.size];
  }

  onPositionUpdate = ref => {
    const {isVisible} = this.state;

    if (!isVisible) {
      const styles = window.getComputedStyle(ref);
      const maxWidth = parseInt(styles.getPropertyValue('max-width'), 10);

      ref.style.whiteSpace = 'normal';
      ref.style.width = maxWidth + 'px';

      const rect = ref.getBoundingClientRect();
      const isMultiline = !isNaN(maxWidth)
        ? this.isMultiline(rect, maxWidth)
        : false;

      if (!isMultiline) {
        ref.style.whiteSpace = 'nowrap';
        ref.style.width = 'auto';
      }

      this.setState({
        isVisible: true,
      });
    }
  }

  shouldComponentUpdatePosition = prevProps => prevProps.direction !== this.props.direction

  render() {
    const {children, className, direction, onClick, size, type} = this.props;
    const {isMultiline, isVisible} = this.state;
    const styles = baseStyles[`${type}-${size}`];

    return (
      <Overlay
        className={classNames(className, styles[direction], {
          [styles.isClosed]: !children,
          [styles.isOpened]: children,
          [styles.isLine]: !isMultiline,
          [styles.isVisible]: isVisible,
        })}
        onClick={onClick}
        onPositionUpdate={this.onPositionUpdate}
        shouldComponentUpdatePosition={this.shouldComponentUpdatePosition}>
        {children}
      </Overlay>
    );
  }
}

Tooltip.defaultProps = {
  direction: 'right',
  size: 'm',
  type: 'normal',
};

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf([
    'bottom',
    'left',
    'right',
    'top',
  ]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
  ]),
  type: PropTypes.oneOf([
    'normal',
    'success',
    'warning',
  ]),
};

module.exports = Tooltip;
