'use strict';

const { action, storiesOf } = require('@kadira/storybook');
const { delimiter } = require('./stories.css');
const Link = require('../component/Link');
const React = require('react');

storiesOf('Link', module)
  .add('theme: `action`', () => (
    <div>
      size: `xs`{' '}
      <Link
        onClick={action('click')}
        size='xs'
        theme='action'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `s`{' '}
      <Link
        onClick={action('click')}
        size='s'
        theme='action'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `m`{' '}
      <Link
        onClick={action('click')}
        size='m'
        theme='action'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `l`{' '}
      <Link
        onClick={action('click')}
        size='l'
        theme='action'>
        Link
      </Link>
    </div>
  ))
  .add('theme: `link`', () => (
    <div>
      size: `xs`{' '}
      <Link
        onClick={action('click')}
        size='xs'
        theme='link'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `s`{' '}
      <Link
        onClick={action('click')}
        size='s'
        theme='link'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `m`{' '}
      <Link
        onClick={action('click')}
        size='m'
        theme='link'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `l`{' '}
      <Link
        onClick={action('click')}
        size='l'
        theme='link'>
        Link
      </Link>
    </div>
  ))
  .add('theme: `normal`', () => (
    <div>
      size: `xs`{' '}
      <Link
        onClick={action('click')}
        size='xs'
        theme='normal'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `s`{' '}
      <Link
        onClick={action('click')}
        size='s'
        theme='normal'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `m`{' '}
      <Link
        onClick={action('click')}
        size='m'
        theme='normal'>
        Link
      </Link>

      <hr className={delimiter}/>

      size: `l`{' '}
      <Link
        onClick={action('click')}
        size='l'
        theme='normal'>
        Link
      </Link>
    </div>
  ));
