'use strict';

const ColorPicker = require('../../component/ColorPicker');
const React = require('react');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(ColorPicker.defaultProps.size).toBe('m');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <ColorPicker
      name='control'/>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <ColorPicker
      autoFocus
      className='outer'
      disabled
      id='controls-id'
      name='control'
      placeholder='rrggbb'
      value='#bebebe'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
