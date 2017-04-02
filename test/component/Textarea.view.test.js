'use strict';

const React = require('react');
const Textarea = require('../../component/Textarea');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(Textarea.defaultProps.size).toBe('m');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Textarea
      name='control'/>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Textarea
      autoComplete='off'
      autoFocus
      className='outer'
      cols='5'
      disabled
      id='controls-id'
      maxLength='25'
      name='control'
      placeholder='it is a placeholder'
      readOnly
      rows='10'
      value='Any Code...'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
