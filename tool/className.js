'use strict';

const classNames = require('classnames');

exports.classNames = classNames;
exports.composition = composition;

/**
 * @param  {object} props
 * @param  {string} props.className
 * @param  {string} props.styleName
 * @param  {object} props.styles
 * @return {string}
 */
function composition(props) {
  return classNames(props.className, props.styles[props.styleName]);
}
