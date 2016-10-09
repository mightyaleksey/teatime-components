'use strict';

const { delimiter } = require('./stories.css');
const { storiesOf } = require('@kadira/storybook');
const React = require('react');
const Spin = require('../component/Spin');

storiesOf('Spin', module)
  .add('preview', () => (
    <div>
      <Spin size='xs'/>

      <hr className={delimiter}/>

      <Spin size='s'/>

      <hr className={delimiter}/>

      <Spin size='m'/>

      <hr className={delimiter}/>

      <Spin size='l'/>

      <hr className={delimiter}/>

      <Spin size='xl'/>
    </div>
  ));
