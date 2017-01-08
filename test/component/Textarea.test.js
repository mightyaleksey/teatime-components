import Textarea from '../../component/Textarea';
import React from 'react';
import renderer from 'react-test-renderer';

test('Textarea renders correctly with defaults', () => {
  const tree = renderer.create(
    <Textarea
      name='textarea control'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Textarea renders correctly with defined props', () => {
  const tree = renderer.create(
    <Textarea
      autoComplete={false}
      autoFocus={true}
      className='outer'
      cols={5}
      disabled={true}
      id='textareas id'
      maxLength={25}
      name='textarea control'
      placeholder='it is a placeholder'
      readOnly={false}
      rows={10}
      value='custom value'/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
