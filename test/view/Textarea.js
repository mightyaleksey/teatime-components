'use strict';

const React = require('react');
const Textarea = require('../../view/Textarea');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {control: 'control'};

test('Textarea className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Textarea
    className='mixin'
    name='motorrad'
    styles={styles}/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'control mixin');
  t.end();
});
