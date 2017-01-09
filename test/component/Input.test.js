import {shallow} from 'enzyme';
import Input from '../../component/Input';
import React from 'react';
import renderer from 'react-test-renderer';

test('Input renders correctly with defaults', () => {
  const tree = renderer.create(
    <Input
      name='input control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Input renders correctly with defined props', () => {
  const tree = renderer.create(
    <Input
      autoComplete={false}
      autoFocus={true}
      className='outer'
      disabled={true}
      id='inputs id'
      maxLength={10}
      name='input control'
      placeholder='it is a placeholder'
      readOnly={false}
      type='password'
      value='custom value'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Input\'s initial size is `m`', () => {
  expect(Input.defaultProps.size).toBe('m');
});

test('Input\'s uncontrolled change of value', () => {
  const event = {target: {value: 'nextValue'}};
  const onChange = jest.fn();

  const component = shallow(
    <Input
      defaultValue='defaultValue'
      name='control'
      onChange={onChange}/>
  );
  expect(component.state('value')).toBe('defaultValue');

  component.find('input').simulate('change', event);
  expect(component.state('value')).toBe('nextValue');
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith(event, {value: 'nextValue'});
});

test('Input\'s controlled change of value', () => {
  const event = {target: {value: 'nextValue'}};
  const onChange = jest.fn();
  const props = {name: 'control', onChange};

  const component = shallow(
    <Input
      {...props}
      value='initialValue'/>
  );
  expect(component.state('value')).toBe('initialValue');

  component.find('input').simulate('change', event);
  expect(component.state('value')).toBe('initialValue');
  expect(onChange).toBeCalled();
  expect(onChange).toBeCalledWith(event, {value: 'nextValue'});

  component.setProps({...props, value: 'nextValue'});
  expect(component.state('value')).toBe('nextValue');
});
