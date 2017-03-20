'use strict';

const {shallow} = require('enzyme');
const Button = require('../../component/Button');
const React = require('react');

test('blur', () => {
  const handler = jest.fn();
  const component = shallow(
    <Button onBlur={handler}/>
  );

  component.find('button').simulate('blur');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('focus', () => {
  const handler = jest.fn();
  const component = shallow(
    <Button onFocus={handler}/>
  );

  component.find('button').simulate('focus');
  expect(handler).toHaveBeenCalledTimes(1);
});
