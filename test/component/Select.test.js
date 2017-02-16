'use strict';

const {shallow} = require('enzyme');
const React = require('react');
const Select = require('../../component/Select');
const renderer = require('react-test-renderer');

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

test('Should update selectedPosition correctly in case value was changed', () => {
  const component = shallow(
    <Select
      name='control'
      options={[
        {label: 'AA', value: 'aa'},
        {label: 'BB', value: 'bb'},
        {label: 'CC', value: 'cc'},
        {label: 'DD', value: 'dd'},
        {label: 'EE', value: 'ee'},
        {label: 'FF', value: 'ff'},
      ]}
      value='cc'/>
  );

  component.setProps({
    value: 'ee',
  });

  expect(component.state('selectedPosition')).toBe(4);
});

test('Should update selectedPosition correctly in case value and options were changed', () => {
  const component = shallow(
    <Select
      name='control'
      options={[
        {label: 'AA', value: 'aa'},
        {label: 'BB', value: 'bb'},
        {label: 'CC', value: 'cc'},
        {label: 'DD', value: 'dd'},
        {label: 'EE', value: 'ee'},
        {label: 'FF', value: 'ff'},
      ]}
      value='cc'/>
  );

  component.setProps({
    options: [
      {label: 'DD', value: 'dd'},
      {label: 'FF', value: 'ff'},
      {label: 'GG', value: 'gg'},
    ],
    value: 'gg',
  });

  expect(component.state('selectedPosition')).toBe(2);
});

test('Should update selectedPosition correctly in case searchValue was changed', () => {
  const component = shallow(
    <Select
      name='control'
      options={[
        {label: 'AABB', value: 'aa'},
        {label: 'BBCC', value: 'bb'},
        {label: 'CCDD', value: 'cc'},
        {label: 'DDEE', value: 'dd'},
        {label: 'EEFF', value: 'ee'},
        {label: 'FFGG', value: 'ff'},
      ]}
      value='cc'/>
  );

  component.setState({searchValue: 'd'});
  expect(component.instance()._menuItems).toHaveLength(2);

  component.setProps({value: 'dd'});
  expect(component.state('selectedPosition')).toBe(3);
});
