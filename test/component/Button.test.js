import Button from '../../component/Button';
import React from 'react';
import renderer from 'react-test-renderer';

test('Button renders correctly', () => {
  const tree = renderer.create(
    <Button
      autoFocus={true}
      className='outer'
      disabled={true}
      id='buttons id'
      type='submit'>
      Normal Button
    </Button>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
