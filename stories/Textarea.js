'use strict';

const { action, storiesOf } = require('@kadira/storybook');
const { column, columns, delimiter } = require('./stories.css');
const React = require('react');
const Textarea = require('../component/Textarea');

const labelStyles = {
  display: 'inline-block',
  margin: '0 8px 0 0',
  width: '62px',
};
const inputStyles = {
  width: 'calc(100% - 70px)',
};

storiesOf('Textarea', module)
  .add('preview', () => (
    <div className={columns}>
      <div className={column}>
        <span style={labelStyles}>size: `s`</span>
        <Textarea
          name='es'
          onChange={action('change')}
          size='s'
          style={inputStyles}/>

        <hr className={delimiter}/>

        <span style={labelStyles}>size: `m`</span>
        <Textarea
          name='em'
          onChange={action('change')}
          size='m'
          style={inputStyles}/>
      </div>
      <div className={column}>
        <Textarea
          disabled={true}
          name='ds'
          onChange={action('change')}
          size='s'/>

        <hr className={delimiter}/>

        <Textarea
          disabled={true}
          name='dm'
          onChange={action('change')}
          size='m'/>
      </div>
    </div>
  ));
