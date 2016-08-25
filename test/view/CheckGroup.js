'use strict';

const React = require('react');
const CheckGroup = require('../../view/CheckGroup');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {
  container: 'container',
  control: 'control',
  label: 'label',
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

test('CheckGroup className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<CheckGroup
    className='mixin'
    name='motorrad'
    options={options}
    styles={styles}/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'container mixin');
  t.end();
});
