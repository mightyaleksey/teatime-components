'use strict';

const {shallow} = require('enzyme');
const React = require('react');
const Tumbler = require('../../component/Tumbler');

test('blur', () => {
  const handler = jest.fn();
  const component = shallow(
    <Tumbler name='control' onBlur={handler}/>
  );

  component.find('input').simulate('blur');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('focus', () => {
  const handler = jest.fn();
  const component = shallow(
    <Tumbler name='control' onFocus={handler}/>
  );

  component.find('input').simulate('focus');
  expect(handler).toHaveBeenCalledTimes(1);
});
