'use strict';

const React = require('react');
const Select = require('../../view/Select');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  control: 'control',
  empty: 'empty',
  input: 'input',
  isClosedControl: 'isClosedControl',
  isClosedMenu: 'isClosedMenu',
  isFixedItem: 'isFixedItem',
  isFixedMenu: 'isFixedMenu',
  isFixedWrapper: 'isFixedWrapper',
  isFocusedItem: 'isFocusedItem',
  isOpenedControl: 'isOpenedControl',
  isOpenedMenu: 'isOpenedMenu',
  isSelectedItem: 'isSelectedItem',
  item: 'item',
  label: 'label',
  menu: 'menu',
  native: 'native',
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

  t.isEqual(result.props.className, 'mixin wrapper isFixedWrapper');
  t.end();
});
