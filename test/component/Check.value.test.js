'use strict';

const {shallow} = require('enzyme');
const React = require('react');
const Check = require('../../component/Check');

test('initialized with `null` value', () => {
  const component = shallow(
    <Check
      checked={null}
      name='control'/>
  );

  expect(component.find('input').props()).toEqual(expect.objectContaining({
    checked: null,
    defaultChecked: void 0,
  }));
});

test('updated with `null` value', () => {
  const component = shallow(
    <Check
      checked
      name='control'/>
  );

  component.setProps({checked: null});

  expect(component.find('input').props()).toEqual(expect.objectContaining({
    checked: null,
    defaultChecked: void 0,
  }));
});
