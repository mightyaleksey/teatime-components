'use strict';

const { isFunction, isUndefined } = require('./func');

exports.bind = bind;
exports.findUnwantedProps = findUnwantedProps;
exports.hasCheckedProp = hasCheckedProp;
exports.hasValueProp = hasValueProp;
exports.indexOf = indexOf;

/**
 * @param  {object} context
 * @param  {string|string[]} methodNames
 * @return {void}
 */
function bind(context, methodNames) {
  const methods = !Array.isArray(methodNames)
    ? [methodNames]
    : methodNames;

  const length = methods.length;
  for (var method, i = 0; i < length; ++i) {
    method = methods[i];
    context[method] = context[method].bind(context);
  }
}

/**
 * @param  {object} instance
 * @return {string[]|null}
 */
function findUnwantedProps(instance) {
  const proto = Object.getPrototypeOf(instance);

  if (proto === null) {
    return null;
  }

  const constr = proto.constructor;

  if (isFunction(constr) && !isUndefined(constr.unwantedProps)) {
    return constr.unwantedProps;
  }

  return findUnwantedProps(proto);
}

/**
 * @see    https://facebook.github.io/react/docs/forms.html#controlled-components
 * @param  {object}  props
 * @return {boolean}
 */
function hasCheckedProp(props) {
  return props.checked !== undefined;
}

/**
 * @see    https://facebook.github.io/react/docs/forms.html#controlled-components
 * @param  {object}  props
 * @return {boolean}
 */
function hasValueProp(props) {
  return props.value !== undefined;
}

/**
 * @param  {object[]} collection
 * @param  {string} value
 * @param  {string} [prop]
 * @return {number}
 */
function indexOf(collection, value, prop = 'value') {
  const length = collection.length;
  for (var i = 0; i < length; ++i) {
    if (collection[i][prop] !== value) {
      continue;
    }

    return i;
  }

  return -1;
}
