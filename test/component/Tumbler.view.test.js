'use strict';

const Tumbler = require('../../component/Tumbler');
const React = require('react');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(Tumbler.defaultProps.size).toBe('m');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Tumbler
      name='control'>
      Notifications
    </Tumbler>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Tumbler
      checked
      className='outer'
      disabled
      hasLabel={false}
      id='controls-id'
      name='control'
      offText='~~OFF~~'
      onText='~~ON~~'>
      Notifications
    </Tumbler>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
