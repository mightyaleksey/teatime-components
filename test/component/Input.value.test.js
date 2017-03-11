'use strict';

const {shallow} = require('enzyme');
const Input = require('../../component/Input');
const React = require('react');

test('initialized with `null` value', () => {
  const component = shallow(
    <Input
      name='control'
      value={null}/>
  );

  expect(component.instance()._controlled).toBe(true);
  expect(component.find('input').props()).toEqual(expect.objectContaining({
    value: '',
  }));
});

test('updated with `null` value', () => {
  const component = shallow(
    <Input
      name='control'
      value='ee'/>
  );

  component.setProps({value: null});

  expect(component.instance()._controlled).toBe(true);
  expect(component.find('input').props()).toEqual(expect.objectContaining({
    value: '',
  }));
});
