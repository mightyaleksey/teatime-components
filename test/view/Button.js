'use strict';

const Button = require('../../view/Button');
const React = require('react');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {control: 'control'};

test('className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Button className='mixin' styles={styles}/>);
  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'mixin control');
  t.end();
});
