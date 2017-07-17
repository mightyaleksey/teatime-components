'use strict';

import {shallow} from 'enzyme';
import CheckGroup from '../../component/CheckGroup';
import React from 'react';

describe('(un)controllable behavior', () => {
  it('should initialize uncontrollable if `value` is not presented', () => {
    const component = shallow(
      <CheckGroup
        defaultValue={[
          'aa',
        ]}
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}
        name='control'/>
    );

    expect(component.instance()._controlled).toBe(false);
  });

  it('should initialize controllable if `value` is presented', () => {
    const component = shallow(
      <CheckGroup
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}
        value={[
          'aa'
        ]}/>
    );

    expect(component.instance()._controlled).toBe(true);
  });

  it('should not update state `value` if controllable', () => {
    const eventData = {checked: true, value: 'bb'};
    const onChange = jest.fn();
    const component = shallow(
      <CheckGroup
        name='control'
        onChange={onChange}
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}
        value={[
          'aa'
        ]}/>
    );

    component.find('Check').first().simulate('change', null, eventData);

    expect(onChange).toHaveBeenCalled();
    expect(component.state('values')).toEqual({
      aa: true,
      bb: false,
      cc: false,
    });
  });

  it('should update state `value` if uncontrollable', () => {
    const eventData = {checked: true, value: 'bb'};
    const onChange = jest.fn();
    const component = shallow(
      <CheckGroup
        defaultValue={[
          'aa'
        ]}
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}
        onChange={onChange}/>
    );

    component.find('Check').first().simulate('change', null, eventData);

    expect(onChange).toHaveBeenCalled();
    expect(component.state('values')).toEqual({
      aa: true,
      bb: true,
      cc: false,
    });
  });

  it('should track transition', () => {
    const component = shallow(
      <CheckGroup
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}/>
    );

    expect(component.instance()._controlled).toBe(false);

    component.setProps({value: ['aa']});

    expect(component.instance()._controlled).toBe(true);
  });
});

describe('onChange', () => {
  it('should call the handler', () => {
    const eventData = {checked: true, value: 'bb'};
    const onChange = jest.fn();
    const component = shallow(
      <CheckGroup
        name='control'
        onChange={onChange}
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}/>
    );

    component.find('Check').first().simulate('change', null, eventData);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(null, {
      name: 'control',
      value: ['bb'],
    });
  });
});
