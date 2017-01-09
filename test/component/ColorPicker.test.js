import ColorPicker from '../../component/ColorPicker';
import React from 'react';
import renderer from 'react-test-renderer';

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
