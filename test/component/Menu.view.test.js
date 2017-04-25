'use strict';

const {noop} = require('../../lib/dash');
const Menu = require('../../component/Menu');
const React = require('react');
const renderer = require('react-test-renderer');

test('defaultProp #direction should have a value `bottom`', () => {
  expect(Menu.defaultProps.direction).toBe('bottom');
});

test('Renders correctly with default props', () => {
  const tree = renderer.create(
    <Menu
      onOutsideClick={noop}
      parentNode={noop}>
      Menu Content
    </Menu>
  );

  expect(tree).toMatchSnapshot();
});

test('Renders correctly with defined props', () => {
  const tree = renderer.create(
    <Menu
      className='outer'
      direction='top'
      onOutsideClick={noop}
      parentNode={noop}>
      Menu Content
    </Menu>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
