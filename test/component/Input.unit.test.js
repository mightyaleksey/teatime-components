'use strict';

import {shallow} from 'enzyme';
import Input from '../../component/Input';
import React from 'react';

describe('(un)controllable behavior', () => {
  it('should initialize uncontrollable if `value` is not presented', () => {
    const component = shallow(
      <Input
        defaultValue='AABBCC'
        name='control'/>
    );

    expect(component.instance()._controlled).toBe(false);
  });

  it('should initialize controllable if `value` is presented', () => {
    const component = shallow(
      <Input
        name='control'
        value='AABBCC'/>
    );

    expect(component.instance()._controlled).toBe(true);
  });

  it('should not update state `value` if controllable', () => {
    const event = {target: {value: '336699'}};
    const onChange = jest.fn();
    const component = shallow(
      <Input
        name='control'
        onChange={onChange}
        value='AABBCC'/>
    );

    component.find('input').simulate('change', event);

    expect(onChange).toHaveBeenCalled();
    expect(component.state('value')).toBe('AABBCC');
  });

  it('should update state `value` if uncontrollable', () => {
    const event = {target: {value: '336699'}};
    const onChange = jest.fn();
    const component = shallow(
      <Input
        defaultValue='AABBCC'
        name='control'
        onChange={onChange}/>
    );

    component.find('input').simulate('change', event);

    expect(onChange).toHaveBeenCalled();
    expect(component.state('value')).toBe('336699');
  });

  it('should track transition', () => {
    const component = shallow(
      <Input
        name='control'/>
    );

    expect(component.instance()._controlled).toBe(false);

    component.setProps({value: 'AABBCC'});

    expect(component.instance()._controlled).toBe(true);
  });
});

describe('prop #value', () => {
  it('should correctly initialize with `null` value', () => {
    const component = shallow(
      <Input
        name='control'
        value={null}/>
    );

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: '',
    }));
  });

  it('should correctly handle `null` value', () => {
    const component = shallow(
      <Input
        name='control'
        value='abc'/>
    );

    component.setProps({value: null});

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: '',
    }));
  });
});

describe('onBlur', () => {
  it('should call the handler', () => {
    const onBlur = jest.fn();
    const component = shallow(
      <Input
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
      <Input
        name='control'
        onChange={onChange}/>
    );

    component.find('input').simulate('change', event);
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
      <Input
        name='control'
        onFocus={onFocus}/>
    );

    component.find('input').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
