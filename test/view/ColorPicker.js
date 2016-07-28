'use strict';

const ColorPicker = require('../../view/ColorPicker');
const React = require('react');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  clear: 'clear',
  container: 'container',
  control: 'control',
  isClosedMenu: 'isClosedMenu',
  isFixedMenu: 'isFixedMenu',
  isFixedWrapper: 'isFixedWrapper',
  isOpenedMenu: 'isOpenedMenu',
  item: 'item',
  line: 'line',
  menu: 'menu',
  preview: 'preview',
  wrapper: 'wrapper',
};

test('ColorPicker className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<ColorPicker
    className='mixin'
    hasFixedWidth={true}
    name='motorrad'
    styles={styles}
    value='369'/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'container isFixedWrapper mixin');
  t.end();
});
