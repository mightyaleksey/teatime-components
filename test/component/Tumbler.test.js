import React from 'react';
import Tumbler from '../../component/Tumbler';
import renderer from 'react-test-renderer';

test('Tumbler renders correctly with defaults', () => {
  const tree = renderer.create(
    <Tumbler
      name='tumbler control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Tumbler renders correctly with defined props', () => {
  const tree = renderer.create(
    <Tumbler
      checked={true}
      disabled={true}
      id='tumblers id'
      name='tumbler control'
      offText='~~OFF~~'
      onText='~~ON~~'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
