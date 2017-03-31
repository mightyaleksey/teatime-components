'use strict';

const Button = require('../../component/Button');
const React = require('react');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(Button.defaultProps.size).toBe('m');
});

test('defaultProp #theme should have a value `normal`', () => {
  expect(Button.defaultProps.theme).toBe('normal');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Button>
      Make Awesome!
    </Button>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Button
      autoFocus
      className='outer'
      disabled
      id='buttons-id'
      type='submit'>
      Make Awesome!
    </Button>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
