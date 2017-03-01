'use strict';

const {shallow} = require('enzyme');
const React = require('react');
const Select = require('../../component/Select');

test('initialized with `null` value', () => {
  const component = shallow(
    <Select
      name='control'
      options={[
        {label: 'AA', value: 'aa'},
        {label: 'BB', value: 'bb'},
        {label: 'CC', value: 'cc'},
        {label: 'DD', value: 'dd'},
        {label: 'EE', value: 'ee'},
        {label: 'FF', value: 'ff'},
      ]}
      placeholder='empty'
      searchable
      value={null}/>
  );

  expect(component.instance()._controlled).toBe(true);
  expect(component.state()).toEqual(expect.objectContaining({
    selectedIndex: -1,
    selectedPosition: -1,
  }));
});

test('updated with `null` value', () => {
  const component = shallow(
    <Select
      name='control'
      options={[
        {label: 'AA', value: 'aa'},
        {label: 'BB', value: 'bb'},
        {label: 'CC', value: 'cc'},
        {label: 'DD', value: 'dd'},
        {label: 'EE', value: 'ee'},
        {label: 'FF', value: 'ff'},
      ]}
      placeholder='empty'
      searchable
      value='ee'/>
  );

  component.setProps({value: null});

  expect(component.instance()._controlled).toBe(true);
  expect(component.state()).toEqual(expect.objectContaining({
    selectedIndex: -1,
    selectedPosition: -1,
  }));
});
