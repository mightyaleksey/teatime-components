'use strict';

const { action, storiesOf } = require('@kadira/storybook');
const { column, columns, delimiter } = require('./stories.css');
const Radio = require('../component/Radio');
const React = require('react');

storiesOf('Radio', module)
  .add('theme: `common`', () => (
    <div className={columns}>
      <div className={column}>
        <Radio
          name='sce-motorrad'
          onChange={action('change')}
          options={[
            {label: 'Yamaha', value: 'yamaha'},
            {label: 'Suzuki', value: 'suzuki'},
            {label: 'Kawasaki', value: 'kawasaki'},
            {label: 'Vespa', value: 'vespa'},
            {label: 'MZ', value: 'mz'},
          ]}
          size='s'
          theme='common'/>

        <hr className={delimiter}/>

        <Radio
          name='mce-motorrad'
          onChange={action('change')}
          options={[
            {label: 'Yamaha', value: 'yamaha'},
            {label: 'Suzuki', value: 'suzuki'},
            {label: 'Kawasaki', value: 'kawasaki'},
            {label: 'Vespa', value: 'vespa'},
            {label: 'MZ', value: 'mz'},
          ]}
          size='m'
          theme='common'/>
      </div>
      <div className={column}>
        <Radio
          disabled={true}
          name='scd-motorrad'
          onChange={action('change')}
          options={[
            {label: 'Yamaha', value: 'yamaha'},
            {label: 'Suzuki', value: 'suzuki'},
            {label: 'Kawasaki', value: 'kawasaki'},
            {label: 'Vespa', value: 'vespa'},
            {label: 'MZ', value: 'mz'},
          ]}
          theme='common'/>

        <hr className={delimiter}/>

        <Radio
          disabled={true}
          name='mcd-motorrad'
          onChange={action('change')}
          options={[
            {label: 'Yamaha', value: 'yamaha'},
            {label: 'Suzuki', value: 'suzuki'},
            {label: 'Kawasaki', value: 'kawasaki'},
            {label: 'Vespa', value: 'vespa'},
            {label: 'MZ', value: 'mz'},
          ]}
          size='m'
          theme='common'/>
      </div>
    </div>
  ))
  .add('theme: `button`', () => (
    <div>
      <Radio
        name='xsbe-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='xs'
        theme='button'/>

      <hr className={delimiter}/>

      <Radio
        disabled={true}
        name='xsbd-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='xs'
        theme='button'/>

      <hr className={delimiter}/>

      <Radio
        name='sbe-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='s'
        theme='button'/>

      <hr className={delimiter}/>

      <Radio
        disabled={true}
        name='sbd-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='s'
        theme='button'/>

      <hr className={delimiter}/>

      <Radio
        name='mbe-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='m'
        theme='button'/>

      <hr className={delimiter}/>

      <Radio
        disabled={true}
        name='mbd-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='m'
        theme='button'/>

      <hr className={delimiter}/>

      <Radio
        name='lbe-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='l'
        theme='button'/>

      <hr className={delimiter}/>

      <Radio
        disabled={true}
        name='lbd-motorrad'
        onChange={action('change')}
        options={[
          {label: 'Yamaha', value: 'yamaha'},
          {label: 'Suzuki', value: 'suzuki'},
          {label: 'Kawasaki', value: 'kawasaki'},
          {label: 'Vespa', value: 'vespa'},
          {label: 'MZ', value: 'mz'},
        ]}
        size='l'
        theme='button'/>
    </div>
  ));
