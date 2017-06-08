'use strict';

const {shallow} = require('enzyme');
const Radio = require('../../component/Radio');
const React = require('react');

describe('(un)controllable behavior', () => {
  it('should initialize uncontrollable if `value` is not presented', () => {
    const component = shallow(
      <Radio
        defaultValue='bb'
        name='control'
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}/>
    );

    expect(component.instance()._controlled).toBe(false);
  });

  it('should initialize controllable if `value` is presented', () => {
    const component = shallow(
      <Radio
        name='control'
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}
        value='bb'/>
    );

    expect(component.instance()._controlled).toBe(true);
  });

  it('should not update state `value` if controllable', () => {
    const onChange = jest.fn();
    const component = shallow(
      <Radio
        name='control'
        onChange={onChange}
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}
        value='bb'/>
    );

    component.instance()._onChange(null, {value: 'cc'});

    expect(onChange).toHaveBeenCalled();
    expect(component.state('value')).toBe('bb');
  });

  it('should update state `value` if uncontrollable', () => {
    const onChange = jest.fn();
    const component = shallow(
      <Radio
        defaultValue='bb'
        name='control'
        onChange={onChange}
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}/>
    );

    component.instance()._onChange(null, {value: 'cc'});

    expect(onChange).toHaveBeenCalled();
    expect(component.state('value')).toBe('cc');
  });

  it('should track transition', () => {
    const component = shallow(
      <Radio
        name='control'
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}/>
    );

    expect(component.instance()._controlled).toBe(false);

    component.setProps({value: 'bb'});

    expect(component.instance()._controlled).toBe(true);
  });
});

describe('prop #value', () => {
  it('should correctly initialize with `null` value', () => {
    const component = shallow(
      <Radio
        name='control'
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}
        value={null}/>
    );

    expect(component.state()).toEqual(expect.objectContaining({
      value: null,
    }));
  });

  it('should correctly handle `null` value', () => {
    const component = shallow(
      <Radio
        name='control'
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}
        value='cc'/>
    );

    component.setProps({value: null});

    expect(component.state()).toEqual(expect.objectContaining({
      value: null,
    }));
  });
});

describe('onBlur', () => {
  it('should call the handler', () => {
    const onBlur = jest.fn();
    const component = shallow(
      <Radio
        name='control'
        onBlur={onBlur}
        options={[]}/>
    );

    component.find('div').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

describe('onChange', () => {
  it('should call the handler', () => {
    const onChange = jest.fn();
    const component = shallow(
      <Radio
        name='control'
        onChange={onChange}
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}/>
    );

    component.instance()._onChange(null, {value: 'bb'});
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(null, {
      name: 'control',
      value: 'bb',
    });
  });

  it('should not call the handler for the same value twice', () => {
    const onChange = jest.fn();
    const component = shallow(
      <Radio
        name='control'
        onChange={onChange}
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
        ]}/>
    );

    component.instance()._onChange(null, {value: 'bb'});
    component.instance()._onChange(null, {value: 'bb'});
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

describe('onFocus', () => {
  it('should call the handler', () => {
    const onFocus = jest.fn();
    const component = shallow(
      <Radio
        name='control'
        onFocus={onFocus}
        options={[]}/>
    );

    component.find('div').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
