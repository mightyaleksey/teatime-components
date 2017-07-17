'use strict';

import CheckGroup from '../../component/CheckGroup';
import React from 'react';
import renderer from 'react-test-renderer';

test('defaultProp #size should have a value `m`', () => {
  expect(CheckGroup.defaultProps.size).toBe('m');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <CheckGroup
      name='control'
      options={[
        {label: 'AA', value: 'aa'},
        {label: 'BB', value: 'bb'},
        {label: 'CC', value: 'cc'},
      ]}/>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <CheckGroup
      className='outer'
      cols={2}
      disabled
      id='controls-id'
      name='control'
      options={[
        {label: 'AA', value: 'aa'},
        {label: 'BB', value: 'bb'},
        {label: 'CC', value: 'cc'},
      ]}
      value={[
        'bb',
        'cc',
      ]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
