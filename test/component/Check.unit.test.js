'use strict';

import {shallow} from 'enzyme';
import Check from '../../component/Check';
import React from 'react';

describe('prop #checked', () => {
  it('should correctly initialize with `null` value', () => {
    const component = shallow(
      <Check
        checked={null}
        name='control'/>
    ).dive();

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
    ).dive();

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
    ).dive();

    component.find('input').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

describe('onChange', () => {
  it('should call the handler', () => {
    const event = {target: {checked: true}};
    const onChange = jest.fn();
    const component = shallow(
      <Check
        name='control'
        onChange={onChange}/>
    ).dive();

    component.find('input').simulate('change', event);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(event, {
      checked: true,
      name: 'control',
      value: expect.any(String),
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
    ).dive();

    component.find('input').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
