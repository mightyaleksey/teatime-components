'use strict';

const Button = require('../../view/Button');
const React = require('react');
const { createRenderer } = require('react-addons-test-utils');
const test = require('tape');

const styles = {control: 'control'};

test('className mixin', t => {
  const shallowRenderer = createRenderer();
  shallowRenderer.render(<Button className='mixin' styles={styles}/>);
  const result = shallowRenderer.getRenderOutput();

  t.isEqual(result.props.className, 'mixin control');
  t.end();
});
