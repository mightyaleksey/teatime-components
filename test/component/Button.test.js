'use strict';

const Button = require('../../component/Button');
const React = require('react');
const renderer = require('react-test-renderer');

test('Button renders correctly', () => {
  const tree = renderer.create(
    <Button
      autoFocus={true}
      className='outer'
      disabled={true}
      id='buttons id'
      type='submit'>
      Normal Button
    </Button>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Button\'s initial size is `m`', () => {
  expect(Button.defaultProps.size).toBe('m');
});
