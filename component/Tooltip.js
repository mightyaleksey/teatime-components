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
  xs: 24,
  s: 28,
  m: 32,
};

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMultiline: false,
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

  /**
   * @param  {object}  rect
   * @param  {number}  rect.height
   * @param  {number}  rect.width
   * @param  {number}  maxWidth
   * @return {boolean}
   */
  isMultiline(rect, maxWidth) {
    return rect.width * rect.height / maxWidth > height[this.props.size];
  }

  onPositionUpdate = rect => {
    const {maxWidth} = this.props;
    const {isMultiline} = this.state;

    if (isMultiline !== this.isMultiline(rect, maxWidth))
      this.setState({
        isMultiline: !this.state.isMultiline,
      });
  }

  shouldComponentUpdatePosition = prevProps => prevProps.direction !== this.props.direction

  render() {
    const {children, className, direction, size, type} = this.props;
    const styles = baseStyles[`${type}-${size}`];

    return (
      <Overlay
        className={classNames(className, styles[direction], {
          [styles.isClosed]: !children,
          [styles.isOpened]: children,
          [styles.isLine]: !this.state.isMultiline,
        })}
        onPositionUpdate={this.onPositionUpdate}
        shouldComponentUpdatePosition={this.shouldComponentUpdatePosition}>
        {children}
      </Overlay>
    );
  }
}

Tooltip.defaultProps = {
  direction: 'right',
  maxWidth: 300,
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
  maxWidth: PropTypes.number,
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
