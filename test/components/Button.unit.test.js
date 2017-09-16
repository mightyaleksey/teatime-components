'use strict';

import * as React from 'react';
import {shallow} from 'enzyme';

import Button from '../../components/Button/Button';

describe.skip('onBlur', () => {
  it('should call the handler', () => {
    const onBlur = jest.fn();
    const component = shallow(
      <Button onBlur={onBlur}>
        Foo
      </Button>
    );

    component.find('button').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});

describe('onClick', () => {
  it('should call the handler', () => {
    const onClick = jest.fn();
    const component = shallow(
      <Button onClick={onClick}>
        Foo
      </Button>
    );

    component.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe.skip('onFocus', () => {
  it('should call the handler', () => {
    const onFocus = jest.fn();
    const component = shallow(
      <Button onFocus={onFocus}>
        Foo
      </Button>
    );

    component.find('button').simulate('focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
