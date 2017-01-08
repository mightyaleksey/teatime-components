import Check from '../../component/Check';
import React from 'react';
import renderer from 'react-test-renderer';

test('Check renders correctly', () => {
  const tree = renderer.create(
    <Check
      checked={true}
      className='outer'
      disabled={true}
      id='checks id'
      label='checks label'
      name='check control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
