'use strict';

import Check from '../../component/Check';
import React from 'react';
import renderer from 'react-test-renderer';

test('defaultProp #size should have a value `m`', () => {
  expect(Check.defaultProps.size).toBe('m');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Check
      name='control'>
      I Agree
    </Check>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Check
      checked
      className='outer'
      disabled
      hasLabel={false}
      id='controls-id'
      name='control'
      value='controls value'>
      Make Awesome!
    </Check>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
