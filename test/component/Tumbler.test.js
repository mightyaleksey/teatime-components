'use strict';

const React = require('react');
const Tumbler = require('../../component/Tumbler');
const renderer = require('react-test-renderer');

test('Tumbler renders correctly with defaults', () => {
  const tree = renderer.create(
    <Tumbler
      name='tumbler control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Tumbler renders correctly with defined props', () => {
  const tree = renderer.create(
    <Tumbler
      checked={true}
      disabled={true}
      id='tumblers id'
      name='tumbler control'
      offText='~~OFF~~'
      onText='~~ON~~'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Tumbler\'s initial size is `m`', () => {
  expect(Tumbler.defaultProps.size).toBe('m');
});
