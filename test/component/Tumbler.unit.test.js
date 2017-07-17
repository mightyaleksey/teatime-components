'use strict';

import {shallow} from 'enzyme';
import Tumbler from '../../component/Tumbler';
import React from 'react';

describe('prop #checked', () => {
  it('should correctly initialize with `null` value', () => {
    const component = shallow(
      <Tumbler
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
      <Tumbler
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
      <Tumbler
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
      <Tumbler
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
      <Tumbler
        name='control'
        onFocus={onFocus}/>
    );

    component.find('input').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
