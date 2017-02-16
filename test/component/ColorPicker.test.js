'use strict';

const ColorPicker = require('../../component/ColorPicker');
const React = require('react');
const renderer = require('react-test-renderer');

test('ColorPicker renders correctly with defaults', () => {
  const tree = renderer.create(
    <ColorPicker
      name='colorPicker control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('ColorPicker renders correctly with defined props', () => {
  const tree = renderer.create(
    <ColorPicker
      autoFocus={true}
      disabled={true}
      id='colorPickers id'
      name='colorPicker control'
      placeholder='FFFFFF'
      value='#bebebe'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('ColorPicker\'s initial size is `m`', () => {
  expect(ColorPicker.defaultProps.size).toBe('m');
});
