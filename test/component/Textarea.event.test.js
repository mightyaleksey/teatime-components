'use strict';

const {shallow} = require('enzyme');
const React = require('react');
const Textarea = require('../../component/Textarea');

test('blur', () => {
  const handler = jest.fn();
  const component = shallow(
    <Textarea name='control' onBlur={handler}/>
  );

  component.find('textarea').simulate('blur');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('focus', () => {
  const handler = jest.fn();
  const component = shallow(
    <Textarea name='control' onFocus={handler}/>
  );

  component.find('textarea').simulate('focus');
  expect(handler).toHaveBeenCalledTimes(1);
});
