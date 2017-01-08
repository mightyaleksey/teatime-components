import Radio from '../../component/Radio';
import React from 'react';
import renderer from 'react-test-renderer';

test('Radio renders correctly with defaults', () => {
  const tree = renderer.create(
    <Radio
      name='radio control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Radio theme=`button` renders correctly', () => {
  const tree = renderer.create(
    <Radio
      className='outer'
      id='radios id'
      name='radio control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {disabled: true, label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}
      theme='button'
      value='ducati'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Radio renders correctly with disabled state', () => {
  const tree = renderer.create(
    <Radio
      className='outer'
      disabled={true}
      id='radios id'
      name='radio control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}
      theme='common'
      value='ducati'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
