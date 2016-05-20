'use strict';

const { PropTypes } = require('react');
const { createTag, div, input, label } = require('../');
const { generateId } = require('../tools/identity');
const cssModules = require('react-css-modules');

function Check({ children, id = generateId(), ...o }) {
  return div({styleName: 'container'},
    input({...o, id, styleName: 'native', type: 'checkbox'}),
    label({htmlFor: id, styleName: 'control'}),
    children
      ? label({htmlFor: id, styleName: 'label'}, children)
      : null
  );
}

Check.defaultProps = {
  styles: {},
};

Check.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
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

module.exports = cssModules(Check);
module.exports.Check = createTag(module.exports);
