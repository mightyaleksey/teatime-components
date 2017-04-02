'use strict';

const Radio = require('../../component/Radio');
const React = require('react');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(Radio.defaultProps.size).toBe('m');
});

test('defaultProp #theme should have a value `common`', () => {
  expect(Radio.defaultProps.theme).toBe('common');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Radio
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
    <Radio
      className='outer'
      disabled
      id='controls-id'
      name='control'
      options={[
        {label: 'AA', value: 'aa'},
        {label: 'BB', value: 'bb'},
        {label: 'CC', value: 'cc'},
      ]}
      theme='button'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
