'use strict';

const Check = require('../../view/Check');
const React = require('react');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  control: 'control',
  label: 'label',
  native: 'native',
  wrapper: 'wrapper',
};

test('Check className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Check
    className='mixin'
    name='motorrad'
    styles={styles}
    value='kawasaki'/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'mixin wrapper');
  t.end();
});
