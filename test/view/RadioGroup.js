'use strict';

const RadioGroup = require('../../view/RadioGroup');
const React = require('react');
const { shallowRender } = require('skin-deep');
const test = require('tape');

const styles = {container: 'container'};

const options = [
  {text: 'Yamaha', value: 'yamaha'},
  {text: 'Suzuki', value: 'suzuki'},
  {text: 'Kawasaki', value: 'kawasaki'},
  {text: 'Vespa', value: 'vespa'},
  {text: 'MZ', value: 'mz'},
];

test('className to contain `mixin` and styleName', t => {
  const tree = shallowRender(<RadioGroup
    className='mixin'
    name='motorrad'
    options={options}
    styles={styles}/>);

  const result = tree.getRenderOutput();

  t.isEqual(result.props.className, 'mixin container');
  t.end();
});
