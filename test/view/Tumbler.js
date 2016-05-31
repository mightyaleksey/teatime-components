'use strict';

const React = require('react');
const Tumbler = require('../../view/Tumbler');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  control: 'control',
  delimiter: 'delimiter',
  label: 'label',
  native: 'native',
  wrapper: 'wrapper',
};

test('className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Tumbler
    className='mixin'
    name='motorrad'
    styles={styles}
    value='kawasaki'/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'mixin wrapper');
  t.end();
});
