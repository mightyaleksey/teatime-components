'use strict';

const { shallowRender } = require('skin-deep');
const React = require('react');
const Tooltip = require('../../component/Tooltip');
const test = require('tape');

test('prop type', t => {
  t.test('\'normal\' by default', a => {
    const tree = render();

    a.isEqual(tree.props.type, 'normal');
    a.end();
  });

  t.test('\'success\' in case success provided', a => {
    const tree = render({type: 'success'});

    a.isEqual(tree.props.type, 'success');
    a.end();
  });

  t.test('\'warning\' in case warning provided', a => {
    const tree = render({type: 'warning'});

    a.isEqual(tree.props.type, 'warning');
    a.end();
  });
});

test('prop direction', t => {
  t.test('\'right\' by default', a => {
    const tree = render();

    a.isEqual(tree.props.styleName, 'right');
    a.end();
  });

  t.test('\'bottom\' in case bottom provided', a => {
    const tree = render({direction: 'bottom'});

    a.isEqual(tree.props.styleName, 'bottom');
    a.end();
  });
});

function render(props) {
  const tree = shallowRender(
    <Tooltip {...props}>
      tooltip's content
    </Tooltip>
  );

  return tree.getRenderOutput();
}
