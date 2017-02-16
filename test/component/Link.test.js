'use strict';

const Link = require('../../component/Link');
const React = require('react');
const renderer = require('react-test-renderer');

test('Link renders correctly', () => {
  const tree = renderer.create(
    <Link
      className='outer'
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

test('Link\'s initial size is `m`', () => {
  expect(Link.defaultProps.size).toBe('m');
});
