'use strict';

const React = require('react');
const Spin = require('../../component/Spin');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(Spin.defaultProps.size).toBe('m');
});

test('Renders correctly', () => {
  const tree = renderer.create(
    <Spin
      className='outer'
      id='spins id'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
