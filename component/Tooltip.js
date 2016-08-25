'use strict';

const { PropTypes } = require('react');
const { bind } = require('../tool/component');
const Overlay = require('../view/Overlay');
const React = require('react');
const TeatimeComponent = require('../view/TeatimeComponent');
const classNames = require('classnames');

const predefinedStyles = {
  'normal-xs': require('../style/tooltip/tooltip-normal-xs.css'),
  'normal-s': require('../style/tooltip/tooltip-normal-s.css'),
  'normal-m': require('../style/tooltip/tooltip-normal-m.css'),
  'success-xs': require('../style/tooltip/tooltip-success-xs.css'),
  'success-s': require('../style/tooltip/tooltip-success-s.css'),
  'success-m': require('../style/tooltip/tooltip-success-m.css'),
  'warning-xs': require('../style/tooltip/tooltip-warning-xs.css'),
  'warning-s': require('../style/tooltip/tooltip-warning-s.css'),
  'warning-m': require('../style/tooltip/tooltip-warning-m.css'),
};

const height = {
  xs: 24,
  s: 28,
  m: 32,
};

class Tooltip extends TeatimeComponent {
  constructor(props) {
    super(props);

    bind(this, [
      'calculatePosition',
      'onPositionUpdate',
      'shouldComponentUpdatePosition',
    ]);

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
  calculatePosition(rect) {
    if (this.props.direction === 'bottom' || this.props.direction === 'top') {
      return rect.top + (rect.left - rect.width / 2) / 10000;
    }

    return (rect.top - rect.height / 2) + rect.left / 10000;
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

  /**
   * @param  {object} rect
   * @param  {node}   ref
   * @return {void}
   */
  onPositionUpdate(rect) {
    if (this.state.isMultiline !== this.isMultiline(rect, this.props.maxWidth)) {
      this.setState({
        isMultiline: !this.state.isMultiline,
      });
    }
  }

  shouldComponentUpdatePosition(prevProps) {
    return prevProps.direction !== this.props.direction;
  }

  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.type + '-' + this.props.size];
  }

  render() {
    const { children, className, direction } = this.props;

    return (
      <Overlay
        className={classNames(this.style(direction), {
          [this.style('isClosed')]: !children,
          [this.style('isOpened')]: children,
          [this.style('isLine')]: !this.state.isMultiline,
        }, className)}
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
  size: 's',
  type: 'normal',
};

Tooltip.propTypes = {
  direction: PropTypes.oneOf([
    'bottom',
    'left',
    'right',
    'top',
  ]),
  maxWidth: PropTypes.number,
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  type: PropTypes.oneOf([
    'normal',
    'success',
    'warning',
  ]),
};

module.exports = Tooltip;
