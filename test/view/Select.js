'use strict';

const React = require('react');
const Select = require('../../view/Select');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  control: 'control',
  isClosed: 'isClosed',
  isFocused: 'isFocused',
  isOpened: 'isOpened',
  isSelected: 'isSelected',
  item: 'item',
  menu: 'menu',
  wrapper: 'wrapper',
};

const options = [
  {text: 'Yamaha', value: 'yamaha'},
  {text: 'Suzuki', value: 'suzuki'},
  {text: 'Kawasaki', value: 'kawasaki'},
  {text: 'Vespa', value: 'vespa'},
  {text: 'MZ', value: 'mz'},
];

test('Select className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<Select
    className='mixin'
    name='motorrad'
    options={options}
    styles={styles}/>);

  const result = tree.dive(['Select']).getRenderOutput();

  t.isEqual(result.props.className, 'mixin wrapper');
  t.end();
});
