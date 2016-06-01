'use strict';

const ColorPicker = require('../../view/ColorPicker');
const React = require('react');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  container: 'container',
  item: 'item',
  line: 'line',
  menu: 'menu',
  preview: 'preview',
  wrapper: 'wrapper',
};

test('className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<ColorPicker
    className='mixin'
    name='motorrad'
    styles={styles}
    value='369'/>);

  const result = tree.dive(['ColorPicker']).getRenderOutput();

  t.isEqual(result.props.className, 'mixin container');
  t.end();
});
