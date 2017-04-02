'use strict';

const {shallow} = require('enzyme');
const React = require('react');
const Textarea = require('../../component/Textarea');

describe('prop #value', () => {
  it('should correctly initialize with `null` value', () => {
    const component = shallow(
      <Textarea
        name='control'
        value={null}/>
    );

    expect(component.find('textarea').props()).toEqual(expect.objectContaining({
      defaultValue: void 0,
      value: '',
    }));
  });

  it('should correctly handle `null` value', () => {
    const component = shallow(
      <Textarea
        name='control'
        value=''/>
    );

    component.setProps({value: null});

    expect(component.find('textarea').props()).toEqual(expect.objectContaining({
      defaultValue: void 0,
      value: '',
    }));
  });
});

describe('onBlur', () => {
  it('should call the handler', () => {
    const onBlur = jest.fn();
    const component = shallow(
      <Textarea
        name='control'
        onBlur={onBlur}/>
    );

    component.find('textarea').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

describe('onChange', () => {
  it('should call the handler', () => {
    const event = {target: {checked: true, value: 'controls value'}};
    const onChange = jest.fn();
    const component = shallow(
      <Textarea
        name='control'
        onChange={onChange}/>
    );

    component.find('textarea').simulate('change', event);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(event, {
      name: 'control',
      value: 'controls value',
    });
  });
});

describe('onFocus', () => {
  it('should call the handler', () => {
    const onFocus = jest.fn();
    const component = shallow(
      <Textarea
        name='control'
        onFocus={onFocus}/>
    );

    component.find('textarea').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
