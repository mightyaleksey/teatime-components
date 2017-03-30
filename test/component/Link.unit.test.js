'use strict';

const {shallow} = require('enzyme');
const Link = require('../../component/Link');
const React = require('react');

describe('onClick', () => {
  it('should call the handler', () => {
    const onClick = jest.fn();
    const preventDefault = jest.fn();
    const component = shallow(<Link onClick={onClick}/>);

    component.find('a').simulate('click', {preventDefault});
    expect(onClick).toHaveBeenCalled();
    expect(preventDefault).not.toHaveBeenCalled();
  });

  it('should not call the handler if #disabled', () => {
    const onClick = jest.fn();
    const preventDefault = jest.fn();
    const component = shallow(<Link disabled onClick={onClick}/>);

    component.find('a').simulate('click', {preventDefault});
    expect(onClick).not.toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });
});
