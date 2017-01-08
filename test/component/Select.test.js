import React from 'react';
import Select from '../../component/Select';
import renderer from 'react-test-renderer';

test('Select renders correctly with defaults', () => {
  const tree = renderer.create(
    <Select
      name='select control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Select renders correctly with defined props', () => {
  const tree = renderer.create(
    <Select
      className='outer'
      disabled={true}
      hasFixedWidth={true}
      id='selects id'
      name='select control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}
      value='jawa'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
