'use strict';

const Textarea = require('../../component/Textarea');
const React = require('react');
const renderer = require('react-test-renderer');

test('Textarea renders correctly with defaults', () => {
  const tree = renderer.create(
    <Textarea
      name='textarea control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Textarea renders correctly with defined props', () => {
  const tree = renderer.create(
    <Textarea
      autoComplete='off'
      autoFocus={true}
      className='outer'
      cols={5}
      disabled={true}
      id='textareas id'
      maxLength={25}
      name='textarea control'
      placeholder='it is a placeholder'
      readOnly={false}
      rows={10}
      value='custom value'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Textarea\'s initial size is `m`', () => {
  expect(Textarea.defaultProps.size).toBe('m');
});
