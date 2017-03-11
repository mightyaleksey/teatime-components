'use strict';

const {shallow} = require('enzyme');
const React = require('react');
const Textarea = require('../../component/Textarea');

test('initialized with `null` value', () => {
  const component = shallow(
    <Textarea
      name='control'
      value={null}/>
  );

  expect(component.find('textarea').props()).toEqual(expect.objectContaining({
    defaultValue: void 0,
    value: '',
  }));
});

test('updated with `null` value', () => {
  const component = shallow(
    <Textarea
      name='control'
      value='ee'/>
  );

  component.setProps({value: null});

  expect(component.find('textarea').props()).toEqual(expect.objectContaining({
    defaultValue: void 0,
    value: '',
  }));
});
