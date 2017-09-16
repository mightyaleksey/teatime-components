'use strict';

import * as React from 'react';
import renderer from 'react-test-renderer';

import Input from '../../components/Input/Input';

test('defaultProp #size should have a value `m`', () => {
  expect(Input.defaultProps.size).toBe('m');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Input
      name='control'/>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Input
      autoComplete='off'
      autoFocus
      className='outer'
      disabled
      id='controls-id'
      maxLength='255'
      name='control'
      placeholder='__'
      readOnly
      type='password'
      value='initial'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
