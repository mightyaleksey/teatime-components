'use strict';

const {shallow} = require('enzyme');
const Check = require('../../component/Check');
const React = require('react');

describe('prop #checked', () => {
  it('should correctly initialize with `null` value', () => {
    const component = shallow(
      <Check
        checked={null}
        name='control'/>
    );

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      defaultChecked: void 0,
      checked: null,
    }));
  });

  it('should correctly handle `null` value', () => {
    const component = shallow(
      <Check
        checked
        name='control'/>
    );

    component.setProps({checked: null});

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      defaultChecked: void 0,
      checked: null,
    }));
  });
});

describe('onBlur', () => {
  it('should call the handler', () => {
    const onBlur = jest.fn();
    const component = shallow(
      <Check
        name='control'
        onBlur={onBlur}/>
    );

    component.find('input').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

describe('onChange', () => {
  it('should call the handler', () => {
    const event = {target: {checked: true, value: 'controls value'}};
    const onChange = jest.fn();
    const component = shallow(
      <Check
        name='control'
        onChange={onChange}/>
    );

    component.find('input').simulate('change', event);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(event, {
      checked: true,
      name: 'control',
      value: 'controls value',
    });
  });
});

describe('onFocus', () => {
  it('should call the handler', () => {
    const onFocus = jest.fn();
    const component = shallow(
      <Check
        name='control'
        onFocus={onFocus}/>
    );

    component.find('input').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
