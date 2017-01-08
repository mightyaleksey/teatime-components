import Input from '../../component/Input';
import React from 'react';
import renderer from 'react-test-renderer';

test('Input renders correctly with defaults', () => {
  const tree = renderer.create(
    <Input
      name='input control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Input renders correctly with defined props', () => {
  const tree = renderer.create(
    <Input
      autoComplete={false}
      autoFocus={true}
      className='outer'
      disabled={true}
      id='inputs id'
      maxLength={10}
      name='input control'
      placeholder='it is a placeholder'
      readOnly={false}
      type='password'
      value='custom value'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
