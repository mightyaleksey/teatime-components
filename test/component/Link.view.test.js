'use strict';

const Link = require('../../component/Link');
const React = require('react');
const renderer = require('react-test-renderer');

test('defaultProp #size should have a value `m`', () => {
  expect(Link.defaultProps.size).toBe('m');
});

test('defaultProp #theme should have a value `link`', () => {
  expect(Link.defaultProps.theme).toBe('link');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Link>
      Link Content
    </Link>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Link
      className='outer'
      disabled
      download={true}
      href='#'
      id='links id'
      target='_blank'
      type='video/mp4'>
      Link Content
    </Link>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
