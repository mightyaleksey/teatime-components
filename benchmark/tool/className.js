'use strict';

const { mapKeys } = require('../../tool/func');
const Suite = require('benchmark').Suite;
const classNames = require('classnames');

const foo = {
  styleName: 'a',
  styles: {
    a: 'generic a',
    b: 'generic b',
    c: 'generic c',
    d: 'generic d',
    e: 'generic e',
  },
};

const keys = {
  c: true,
};

new Suite({
  onCycle: showResult,
})
.add('styleName', () => styleName(foo))
.add('styleName with optinal string', () => styleNameWithOption(foo))
.add('styleName with map', () => styleNameWithMap(foo))
.add('styleName with map + key', () => styleNameWithMap(foo, keys))
.run();

function showResult(e) {
  console.log(String(e.target));
}

/**
 * @param  {object} props
 * @return {string}
 */
function styleName(props) {
  return classNames(props.className, props.styles[props.styleName]);
}

/**
 * @param  {object} props
 * @param  {string} optional
 * @return {string}
 */
function styleNameWithOption(props, optional) {
  return classNames(props.className, props.styles[props.styleName], optional);
}

/**
 * @param  {object} props
 * @param  {object} optional
 * @return {string}
 */
function styleNameWithMap(props, optional) {
  return classNames(props.className, props.styles[props.styleName],
    mapKeys((_, key) => props.styles[key], optional));
}
