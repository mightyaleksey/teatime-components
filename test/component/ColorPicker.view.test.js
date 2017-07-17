'use strict';

import ColorPicker from '../../component/ColorPicker';
import React from 'react';
import renderer from 'react-test-renderer';

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
