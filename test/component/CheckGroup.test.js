import CheckGroup from '../../component/CheckGroup';
import React from 'react';
import renderer from 'react-test-renderer';

test('CheckGroup renders correctly with defaults', () => {
  const tree = renderer.create(
    <CheckGroup
      name='checkGroup control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('CheckGroup renders correctly with defined props', () => {
  const tree = renderer.create(
    <CheckGroup
      cols={2}
      id='checkGroups id'
      name='checkGroup control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {disabled: true, label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}
      value={[
        'ducati',
        'honda',
      ]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('CheckGroup\'s initial size is `m`', () => {
  expect(CheckGroup.defaultProps.size).toBe('m');
});
