'use strict';

const {shallow} = require('enzyme');
const SelectMultiple = require('../../component/SelectMultiple');
const React = require('react');

describe('(un)controllable behavior', () => {
  it('should initialize uncontrollable if `value` is not presented', () => {
    const component = shallow(
      <SelectMultiple
        defaultValue={['AABBCC']}
        name='control'
        options={[]}/>
    );

    expect(component.instance()._controlled).toBe(false);
  });

  it('should initialize controllable if `value` is presented', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[]}
        value={['AABBCC']}/>
    );

    expect(component.instance()._controlled).toBe(true);
  });

  it('should not update state `value` if controllable', () => {
    const onChange = jest.fn();
    const component = shallow(
      <SelectMultiple
        name='control'
        onChange={onChange}
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}
        value={['aa']}/>
    );

    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [0],
      selectedPositions: [0],
    }));

    component.instance()._onItemSelect(null, 1);

    expect(onChange).toHaveBeenCalled();
    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [0],
      selectedPositions: [0],
    }));
  });

  it('should update state `value` if uncontrollable', () => {
    const onChange = jest.fn();
    const component = shallow(
      <SelectMultiple
        defaultValue={['aa']}
        name='control'
        onChange={onChange}
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}/>
    );

    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [0],
      selectedPositions: [0],
    }));

    component.instance()._onItemSelect(null, 1);

    expect(onChange).toHaveBeenCalled();
    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [0, 1],
      selectedPositions: [0, 1],
    }));
  });
});

describe('prop #options', () => {
  it('should update `selectedPositions` correctly in case #value and #options were changed', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'AA', value: 'aa'},
          {label: 'BB', value: 'bb'},
          {label: 'CC', value: 'cc'},
          {label: 'DD', value: 'dd'},
          {label: 'EE', value: 'ee'},
          {label: 'FF', value: 'ff'},
        ]}
        value={['cc']}/>
    );

    component.setProps({
      options: [
        {label: 'DD', value: 'dd'},
        {label: 'FF', value: 'ff'},
        {label: 'GG', value: 'gg'},
      ],
      value: ['gg'],
    });

    expect(component.state('selectedPositions')).toEqual([2]);
  });

  it('should update `selectedPositions` correctly in case `searchValue` was changed', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'AABB', value: 'aa'},
          {label: 'BBCC', value: 'bb'},
          {label: 'CCDD', value: 'cc'},
          {label: 'DDEE', value: 'dd'},
          {label: 'EEFF', value: 'ee'},
          {label: 'FFGG', value: 'ff'},
        ]}
        value={['cc']}/>
    );

    component.setState({searchValue: 'd'});
    expect(component.instance()._menuItems).toHaveLength(2);

    component.setProps({value: ['dd', 'ff']});
    expect(component.state('selectedPositions')).toEqual([3, 5]);
  });
});

describe('prop #value', () => {
  it('should correctly initialize with `null` value', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}
        value={null}/>
    );

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: '',
    }));
  });

  it('should correctly handle `null` value', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}
        value={['aa']}/>
    );

    component.setProps({value: null});

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: '',
    }));
  });

  it('should not pick option with a `null` value in case value is `null` during initialization', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: null},
        ]}
        value={null}/>
    );

    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [],
      selectedPositions: [],
    }));

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: '',
    }));
  });

  it('should drop option in case nextValue is `null` and there is a option with `null` value', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: null},
        ]}
        value={['aa']}/>
    );

    component.setProps({value: null});

    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [],
      selectedPositions: [],
    }));

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: '',
    }));
  });

  it('should correctly pick options in case value is `null` and nextValue is an array', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: null},
        ]}
        value={null}/>
    );

    component.setProps({value: ['aa', 'bb']});

    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [0, 1],
      selectedPositions: [0, 1],
    }));

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: 'aa, bb',
    }));
  });

  it('should correctly pick options in case value is an array and nextValue is an array', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: null},
        ]}
        value={['bb']}/>
    );

    component.setProps({value: ['aa']});

    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [0],
      selectedPositions: [0],
    }));

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: 'aa',
    }));
  });

  it('should correctly pick options in case value is an array', () => {
    const component = shallow(
      <SelectMultiple
        name='control'
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: null},
        ]}
        value={['aa', 'bb']}/>
    );

    expect(component.state()).toEqual(expect.objectContaining({
      selectedIndexes: [0, 1],
      selectedPositions: [0, 1],
    }));

    expect(component.find('input').props()).toEqual(expect.objectContaining({
      value: 'aa, bb',
    }));
  });
});

describe('onBlur', () => {
  it('should call the handler', () => {
    const onBlur = jest.fn();
    const component = shallow(
      <SelectMultiple
        name='control'
        onBlur={onBlur}
        options={[]}/>
    );

    component.find('.baseline button').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should call the handler if #searchable', () => {
    const onBlur = jest.fn();
    const component = shallow(
      <SelectMultiple
        name='control'
        onBlur={onBlur}
        options={[]}
        searchable/>
    );

    component.find('.baseline input').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

describe('onChange', () => {
  it('should call the handler', () => {
    // const event = {target: {checked: true, value: 'controls value'}};
    const onChange = jest.fn();
    const component = shallow(
      <SelectMultiple
        name='control'
        onChange={onChange}
        options={[
          {label: 'aa', value: 'aa'},
          {label: 'bb', value: 'bb'},
          {label: 'cc', value: 'cc'},
        ]}/>
    );

    component.instance()._onItemSelect(null, 1);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(null, {
      name: 'control',
      value: ['bb'],
    });
  });
});

describe('onFocus', () => {
  it('should call the handler', () => {
    const onFocus = jest.fn();
    const component = shallow(
      <SelectMultiple
        name='control'
        onFocus={onFocus}
        options={[]}/>
    );

    component.find('.baseline button').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should call the handler if #searchable', () => {
    const onFocus = jest.fn();
    const component = shallow(
      <SelectMultiple
        name='control'
        onFocus={onFocus}
        options={[]}
        searchable/>
    );

    component.find('.baseline input').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
