'use strict';

const {shallow} = require('enzyme');
const Select = require('../../component/Select');
const React = require('react');

test('blur', () => {
  const handler = jest.fn();
  const component = shallow(
    <Select name='control' onBlur={handler} options={[]}/>
  );

  component.find('button').simulate('blur');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('blur #searchable', () => {
  const handler = jest.fn();
  const component = shallow(
    <Select name='control' onBlur={handler} options={[]} searchable/>
  );

  component.find('input.search').simulate('blur');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('focus', () => {
  const handler = jest.fn();
  const component = shallow(
    <Select name='control' onFocus={handler} options={[]}/>
  );

  component.find('button').simulate('focus');
  expect(handler).toHaveBeenCalledTimes(1);
});

test('focus #searchable', () => {
  const handler = jest.fn();
  const component = shallow(
    <Select name='control' onFocus={handler} options={[]} searchable/>
  );

  component.find('input.search').simulate('focus');
  expect(handler).toHaveBeenCalledTimes(1);
});
