'use strict';

const { action, storiesOf } = require('@kadira/storybook');
const { column, columns, delimiter } = require('./stories.css');
const Input = require('../component/Input');
const React = require('react');

const labelStyles = {
  display: 'inline-block',
  margin: '0 8px 0 0',
  width: '62px',
};
const inputStyles = {
  width: 'calc(100% - 70px)',
};

storiesOf('Input', module)
  .add('preview', () => (
    <div className={columns}>
      <div className={column}>
        <span style={labelStyles}>size: `xs`</span>
        <Input
          name='exs'
          onChange={action('change')}
          placeholder='default text'
          size='xs'
          style={inputStyles}/>

        <hr className={delimiter}/>

        <span style={labelStyles}>size: `s`</span>
        <Input
          name='es'
          onChange={action('change')}
          size='s'
          style={inputStyles}/>

        <hr className={delimiter}/>

        <span style={labelStyles}>size: `m`</span>
        <Input
          name='em'
          onChange={action('change')}
          size='m'
          style={inputStyles}/>
      </div>
      <div className={column}>
        <Input
          disabled={true}
          name='dxs'
          onChange={action('change')}
          size='xs'/>

        <hr className={delimiter}/>

        <Input
          disabled={true}
          name='ds'
          onChange={action('change')}
          size='s'/>

        <hr className={delimiter}/>

        <Input
          disabled={true}
          name='dm'
          onChange={action('change')}
          size='m'/>
      </div>
    </div>
  ));
