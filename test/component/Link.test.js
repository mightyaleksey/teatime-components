import Link from '../../component/Link';
import React from 'react';
import renderer from 'react-test-renderer';

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
