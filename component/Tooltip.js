'use strict';

const { Component, PropTypes } = require('react');
const { bind } = require('../tool/component');
const Overlay = require('../view/Overlay');
const React = require('react');
const cx = require('classnames');

const baseStyles = {
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

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multiline: false,
    };

    bind(this, 'handleOverlayUpdate');
  }

  handleOverlayUpdate(rect, ref) {
    const isMultiline = rect.width * rect.height / this.props.maxWidth > 26;

    if (this._isMultiline === isMultiline) {
      return;
    }

    if (isMultiline) {
      ref.style.width = this.props.maxWidth + 'px';
      ref.style.whiteSpace = 'normal';
    } else {
      ref.style.width = 'auto';
      ref.style.whiteSpace = 'nowrap';
    }

    this._isMultiline = isMultiline;
  }

  render() {
    const { children, className, direction, size, type, ...o } = this.props;
    const styles = baseStyles[`${type}-${size}`];

    const mixin = children
      ? styles.isOpened
      : styles.isClosed;

    return (
      <Overlay
        {...o}
        className={cx(className, mixin, styles[direction])}
        onUpdate={this.handleOverlayUpdate}
        styleName={direction}
        styles={styles}
        type={type}>
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
