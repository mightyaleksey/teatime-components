import {shallow} from 'enzyme';
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

test('Select\'s initial size is `m`', () => {
  expect(Select.defaultProps.size).toBe('m');
});

test('Should update selectedIndex correctly in case value was changed', () => {
  const component = shallow(
    <Select
      name='control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {label: 'Honda', value: 'honda'},
        {label: 'Jawa', value: 'jawa'},
      ]}
      value='jawa'/>
  );

  component.setProps({
    value: 'honda',
  });

  expect(component.state('selectedIndex')).toBe(1);
});

test('Should update selectedIndex correctly in case value and options were changed', () => {
  const component = shallow(
    <Select
      name='control'
      options={[
        {label: 'Ducati', value: 'ducati'},
        {label: 'Jawa', value: 'jawa'},
      ]}
      value='jawa'/>
  );

  component.setProps({
    options: [
      {label: 'Honda', value: 'honda'},
    ],
    value: 'honda',
  });

  expect(component.state('selectedIndex')).toBe(0);
});
