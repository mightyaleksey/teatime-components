'use strict';

import * as React from 'react';
import {shallow} from 'enzyme';

import Button from '../../components/Button/Button';

describe('onBlur', () => {
  it('should call the handler', () => {
    const onBlur = jest.fn();
    const component = shallow(<Button onBlur={onBlur}/>);

    component.find('button').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

describe('onClick', () => {
  it('should call the handler', () => {
    const onClick = jest.fn();
    const component = shallow(<Button onClick={onClick}/>);

    component.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('onFocus', () => {
  it('should call the handler', () => {
    const onFocus = jest.fn();
    const component = shallow(<Button onFocus={onFocus}/>);

    component.find('button').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
