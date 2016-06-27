'use strict';

const { identity, mapRange } = require('../../tool/func');
const Suite = require('benchmark').Suite;

const smallAmount = mapRange(identity, 50);
const biggerAmount = mapRange(identity, 500);

new Suite({
  onCycle: showResult,
})
.add('es-filter on small amount', () => esFilter(smallAmount, predicate))
.add('for-loop on small amount', () => forLoop(smallAmount, predicate))
.add('es-filter on big amount', () => esFilter(biggerAmount, predicate))
.add('for-loop on big amount', () => forLoop(biggerAmount, predicate))
.run();

function showResult(e) {
  console.log(String(e.target));
}

function esFilter(values, predicate) {
  return values.filter(predicate);
}

function forLoop(values, predicate) {
  const nextCollection = [];

  for (var length = values.length, i = 0; i < length; ++i) {
    if (predicate(values[i])) {
      nextCollection.push(values[i]);
    }
  }

  return nextCollection;
}

function predicate(a) {
  return a < 5;
}
