'use strict';

const React = require('react');
const { Component, PropTypes } = React;
const { bind, noop } = require('../tools/func');
const { generateId } = require('../tools/identity');
const cssModules = require('react-css-modules');

class Tumbler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id || generateId(),
    };

    bind(this, 'onChange');
  }

  onChange(e) {
    const { checked, value } = e.target;
    this.props.onChange(e, {checked, value});
  }

  render() {
    const { className, off, on, ...o } = this.props;
    const { id } = this.state;

    /**
     * Still there is an issue about controlled and uncontrolled components,
     * related to the input[type="checkbox"] and input[type="radio"].
     * It results in the way controlled components are determined.
     *
     * @see https://github.com/facebook/react/blob/v15.1.0/src/renderers/dom/client/wrappers/ReactDOMInput.js#L171
     * @see https://github.com/facebook/react/issues/6779
     */

    return (
      <div className={className} styleName='wrapper'>
        <input {...o} id={id} styleName='native' onChange={this.onChange} type='checkbox'/>
        <label htmlFor={id} styleName='control'>
          <span styleName='label'>{on}</span>
          <span styleName='label'>{off}</span>
          <span styleName='delimiter'>&nbsp;</span>
        </label>
      </div>
    );
  }
}

Tumbler.defaultProps = {
  off: 'Off',
  on: 'On',
  onChange: noop,
  styles: {},
};

Tumbler.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  off: PropTypes.string,
  on: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchCancel: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  styles: PropTypes.object,
  value: PropTypes.string.isRequired,
};

module.exports = cssModules(Tumbler);
