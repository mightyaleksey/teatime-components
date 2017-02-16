'use strict';

const Check = require('../../component/Check');
const React = require('react');
const renderer = require('react-test-renderer');

test('Check renders correctly', () => {
  const tree = renderer.create(
    <Check
      checked={true}
      className='outer'
      disabled={true}
      id='checks id'
      label='checks label'
      name='check control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Check\'s initial size is `m`', () => {
  expect(Check.defaultProps.size).toBe('m');
});
