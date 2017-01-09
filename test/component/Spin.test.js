import React from 'react';
import Spin from '../../component/Spin';
import renderer from 'react-test-renderer';

test('Spin renders correctly', () => {
  const tree = renderer.create(
    <Spin
      className='outer'
      id='spins id'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Spin\'s initial size is `m`', () => {
  expect(Spin.defaultProps.size).toBe('m');
});
