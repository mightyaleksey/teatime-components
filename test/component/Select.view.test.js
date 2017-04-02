'use strict';

const Select = require('../../component/Select');
const React = require('react');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(Select.defaultProps.size).toBe('m');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Select
      name='control'
      options={[]}/>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Select
      className='outer'
      disabled
      hasFixedWidth
      id='controls-id'
      name='control'
      options={[
        {label: 'aa', value: 'aa'},
        {label: 'bb', value: 'bb'},
        {label: 'cc', value: 'cc'},
        {label: 'dd', value: 'dd'},
        {label: 'ee', value: 'ee'},
      ]}
      optionsLimit={4}
      placeholder='__'
      searchable
      searchEmptyText='Nothing :('
      searchEngine='startsWith'
      value='dd'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
