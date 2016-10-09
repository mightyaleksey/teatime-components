'use strict';

const { action, storiesOf } = require('@kadira/storybook');
const { delimiter } = require('./stories.css');
const Button = require('../component/Button');
const React = require('react');

storiesOf('Button', module)
  .add('theme: `action`', () => (
    <div>
      size: `xs`{' '}
      <Button onClick={action('click')} size='xs' theme='action'>
        Action Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='xs'
        theme='action'>
        Action Button
      </Button>

      <hr className={delimiter}/>

      size: `s`{' '}
      <Button onClick={action('click')} size='s' theme='action'>
        Action Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='s'
        theme='action'>
        Action Button
      </Button>

      <hr className={delimiter}/>

      size: `m`{' '}
      <Button onClick={action('click')} size='m' theme='action'>
        Action Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='m'
        theme='action'>
        Action Button
      </Button>

      <hr className={delimiter}/>

      size: `l`{' '}
      <Button onClick={action('click')} size='l' theme='action'>
        Action Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='l'
        theme='action'>
        Action Button
      </Button>
    </div>
  ))
  .add('theme: `link`', () => (
    <div>
      size: `xs`{' '}
      <Button onClick={action('click')} size='xs' theme='link'>
        Pseudo Link Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='xs'
        theme='link'>
        Pseudo Link Button
      </Button>

      <hr className={delimiter}/>

      size: `s`{' '}
      <Button onClick={action('click')} size='s' theme='link'>
        Pseudo Link Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='s'
        theme='link'>
        Pseudo Link Button
      </Button>

      <hr className={delimiter}/>

      size: `m`{' '}
      <Button onClick={action('click')} size='m' theme='link'>
        Pseudo Link Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='m'
        theme='link'>
        Pseudo Link Button
      </Button>

      <hr className={delimiter}/>

      size: `l`{' '}
      <Button onClick={action('click')} size='l' theme='link'>
        Action Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='l'
        theme='link'>
        Action Button
      </Button>
    </div>
  ))
  .add('theme: `normal`', () => (
    <div>
      size: `xs`{' '}
      <Button onClick={action('click')} size='xs' theme='normal'>
        Normal Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='xs'
        theme='normal'>
        Normal Button
      </Button>

      <hr className={delimiter}/>

      size: `s`{' '}
      <Button onClick={action('click')} size='s' theme='normal'>
        Normal Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='s'
        theme='normal'>
        Normal Button
      </Button>

      <hr className={delimiter}/>

      size: `m`{' '}
      <Button onClick={action('click')} size='m' theme='normal'>
        Normal Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='m'
        theme='normal'>
        Normal Button
      </Button>

      <hr className={delimiter}/>

      size: `l`{' '}
      <Button onClick={action('click')} size='l' theme='normal'>
        Normal Button
      </Button>{' '}
      <Button
        disabled={true}
        onClick={action('click')}
        size='l'
        theme='normal'>
        Normal Button
      </Button>
    </div>
  ));
