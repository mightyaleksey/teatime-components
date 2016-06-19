'use strict';

exports.bind = bind;
exports.hasCheckedProp = hasCheckedProp;
exports.hasValueProp = hasValueProp;
exports.indexOf = indexOf;

/**
 * @param  {object} context
 * @param  {string|string[]} methodNames
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
 * @see    https://facebook.github.io/react/docs/forms.html#controlled-components
 * @param  {object}  props
 * @return {boolean}
 */
function hasCheckedProp(props) {
  // @todo add assertion for defaultValue
  return props.checked !== undefined;
}

/**
 * @see    https://facebook.github.io/react/docs/forms.html#controlled-components
 * @param  {object}  props
 * @return {boolean}
 */
function hasValueProp(props) {
  // @todo add assertion for defaultValue
  return props.value !== undefined;
}

/**
 * @param  {object[]} collection
 * @param  {string} value
 * @return {number}
 */
function indexOf(collection, value) {
  const length = collection.length;
  for (var i = 0; i < length; ++i) {
    if (collection[i].value !== value) {
      continue;
    }

    return i;
  }

  return -1;
}
