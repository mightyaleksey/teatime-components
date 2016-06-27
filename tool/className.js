'use strict';

const { mapKeys } = require('./func');
const classNames = require('classnames');

exports.classNames = classNames;
exports.style = style;
exports.styleName = styleName;

/**
 * @param  {object} styles
 * @param  {string} name
 * @param  {object} [optional]
 * @return {string}
 */
function style(styles, name, optional) {
  return classNames(styles[name],
    mapKeys((_, key) => styles[key], optional));
}

/**
 * @param  {object} props
 * @param  {string} props.className
 * @param  {string} props.styleName
 * @param  {object} props.styles
 * @param  {object} [optional]
 * @return {string}
 */
function styleName(props, optional) {
  return classNames(props.className, props.styles[props.styleName],
    mapKeys((_, key) => props.styles[key], optional));
}
