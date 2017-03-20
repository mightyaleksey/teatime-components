'use strict';

const {shallow} = require('enzyme');
const Check = require('../../component/Check');
const React = require('react');

test('blur', () => {
  const handler = jest.fn();
  const component = shallow(
    <Check name='control' onBlur={handler}/>
  );

  component.find('input').simulate('blur');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('focus', () => {
  const handler = jest.fn();
  const component = shallow(
    <Check name='control' onFocus={handler}/>
  );

  component.find('input').simulate('focus');
  expect(handler).toHaveBeenCalledTimes(1);
});
