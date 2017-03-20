'use strict';

const {shallow} = require('enzyme');
const ColorPicker = require('../../component/ColorPicker');
const React = require('react');

test('blur', () => {
  const handler = jest.fn();
  const component = shallow(
    <ColorPicker name='control' onBlur={handler}/>
  );

  component.find('input').simulate('blur');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('focus', () => {
  const handler = jest.fn();
  const component = shallow(
    <ColorPicker name='control' onFocus={handler}/>
  );

  component.find('input').simulate('focus');
  expect(handler).toHaveBeenCalledTimes(1);
});
