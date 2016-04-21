import React, { createElement } from 'react';
import h from 'hyperscript-helpers';
import container from './container.css';

import { button } from '../components/button.js';

import buttonNormalS from '../theme/islands/button-normal-s.css';
import buttonNormalM from '../theme/islands/button-normal-m.css';
import buttonNormalL from '../theme/islands/button-normal-l.css';
import buttonNormalXL from '../theme/islands/button-normal-xl.css';

import buttonActionS from '../theme/islands/button-action-s.css';
import buttonActionM from '../theme/islands/button-action-m.css';
import buttonActionL from '../theme/islands/button-action-l.css';
import buttonActionXL from '../theme/islands/button-action-xl.css';


import { input } from '../components/input.js';

import inputM from '../theme/islands/input-m.css';


import { link } from '../components/link.js';

import linkS from '../theme/islands/link-s.css';
import linkM from '../theme/islands/link-m.css';
import linkL from '../theme/islands/link-l.css';
import linkXL from '../theme/islands/link-xl.css';


import { textarea } from '../components/textarea.js';


import Select from '../components/select.js';
import selectM from '../theme/islands/select-m.css';

const { div, h1 } = h(createElement);

const options = [
  {value: 'ava', label: 'ava'},
  {value: 'mocha', label: 'mocha'},
  {value: 'tape', label: 'tape'},
];

export default () => div(null,
  h1({className: container.header}, 'Buttons'),

  div({className: container.row},
    button({styles: buttonNormalS}, 'button'), ' ',
    button({disabled: true, styles: buttonNormalS}, 'button'),
  ),
  div({className: container.row},
    button({styles: buttonNormalM}, 'button'), ' ',
    button({disabled: true, styles: buttonNormalM}, 'button'),
  ),
  div({className: container.row},
    button({styles: buttonNormalL}, 'button'), ' ',
    button({disabled: true, styles: buttonNormalL}, 'button'),
  ),
  div({className: container.row},
    button({styles: buttonNormalXL}, 'button'), ' ',
    button({disabled: true, styles: buttonNormalXL}, 'button'),
  ),

  div({className: container.row},
    button({styles: buttonActionS}, 'button'), ' ',
    button({disabled: true, styles: buttonActionS}, 'button'),
  ),
  div({className: container.row},
    button({styles: buttonActionM}, 'button'), ' ',
    button({disabled: true, styles: buttonActionM}, 'button'),
  ),
  div({className: container.row},
    button({styles: buttonActionL}, 'button'), ' ',
    button({disabled: true, styles: buttonActionL}, 'button'),
  ),
  div({className: container.row},
    button({styles: buttonActionXL}, 'button'), ' ',
    button({disabled: true, styles: buttonActionXL}, 'button'),
  ),

  h1({className: container.header}, 'Links'),

  div({className: container.row},
    link({href: '#', styles: buttonNormalS}, 'link'), ' ',
    link({href: '#', styles: buttonNormalM}, 'link'), ' ',
    link({href: '#', styles: buttonNormalL}, 'link'), ' ',
    link({href: '#', styles: buttonNormalXL}, 'link')
  ),
  div({className: container.row},
    link({href: '#', styles: buttonActionS}, 'link'), ' ',
    link({href: '#', styles: buttonActionM}, 'link'), ' ',
    link({href: '#', styles: buttonActionL}, 'link'), ' ',
    link({href: '#', styles: buttonActionXL}, 'link')
  ),
  div({className: container.row},
    link({href: '#', styles: linkS}, 'link'), ' ',
    link({href: '#', styles: linkM}, 'link'), ' ',
    link({href: '#', styles: linkL}, 'link'), ' ',
    link({href: '#', styles: linkXL}, 'link')
  ),

  h1({className: container.header}, 'Text fields'),

  div({className: container.row},
    input({name: 'i', placeholder: 'Введите текст', styles: inputM}), ' ',
    input({disabled: true, name: 'di', placeholder: 'Введите текст', styles: inputM})
  ),
  div({className: container.row},
    textarea({name: 'ta', placeholder: 'Введите текст', styles: inputM}), ' ',
    textarea({disabled: true, name: 'dta', placeholder: 'Введите текст', styles: inputM})
  ),

  h1({className: container.header}, 'Select'),

  div({className: container.row},
    createElement(Select, {options, styles: selectM})
  )
);
