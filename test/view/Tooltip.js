'use strict';

const React = require('react');
const Tooltip = require('../../view/Tooltip');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {popup: 'popup'};

test('className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Tooltip
    className='mixin'
    styles={styles}>Hello</Tooltip>);

  const result = tree.dive(['Popup']).getRenderOutput();

  t.isEqual(result.props.className, 'mixin popup');
  t.end();
});
