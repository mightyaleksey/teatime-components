'use strict';

const { Link: BaseLink } = require('../view/link');
const { PropTypes } = require('react');
const { createTag } = require('../');

const baseStyles = {
  's': require('../style/link/link-s.css'),
  'm': require('../style/link/link-m.css'),
  'l': require('../style/link/link-l.css'),
  'xl': require('../style/link/link-xl.css'),
};

function Link({ href, size, styles, ...o }) {
  return BaseLink({...o, href, styles: {
    ...baseStyles[size],
    ...styles,
  }});
}

Link.defaultProps = {
  size: 'm',
  styles: {},
};

Link.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
    'l',
    'xl',
  ]),
  styles: PropTypes.object,
};

module.exports = Link;
module.exports.Link = createTag(module.exports);
