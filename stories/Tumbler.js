'use strict';

const { action, storiesOf } = require('@kadira/storybook');
const { delimiter } = require('./stories.css');
const React = require('react');
const Tumbler = require('../component/Tumbler');

storiesOf('Tumbler', module)
  .add('preview', () => (
    <div>
      size `xs`{' '}
      <Tumbler
        name='exs'
        onChange={action('change')}
        size='xs'/>{' '}
      <Tumbler
        disabled={true}
        name='dxs'
        onChange={action('change')}
        size='xs'/>

      <hr className={delimiter}/>

      size `s`{' '}
      <Tumbler
        defaultChecked={true}
        name='es'
        onChange={action('change')}
        size='s'/>{' '}
      <Tumbler
        defaultChecked={true}
        disabled={true}
        name='ds'
        onChange={action('change')}
        size='s'/>

      <hr className={delimiter}/>

      size `m`{' '}
      <Tumbler
        name='em'
        onChange={action('change')}
        size='m'/>{' '}
      <Tumbler
        disabled={true}
        name='dm'
        onChange={action('change')}
        size='m'/>
    </div>
  ));
