'use strict';

import Link from '../../component/Link';
import React from 'react';
import renderer from 'react-test-renderer';

test('defaultProp #size should have a value `m`', () => {
  expect(Link.defaultProps.size).toBe('m');
});

test('defaultProp #theme should have a value `common`', () => {
  expect(Link.defaultProps.theme).toBe('common');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Link href='#'>
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
