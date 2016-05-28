'use strict';

const React = require('react');
const Spin = require('../../view/Spin');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {control: 'control'};

test('className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Spin className='mixin' styles={styles}/>);
  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'mixin control');
  t.end();
});
