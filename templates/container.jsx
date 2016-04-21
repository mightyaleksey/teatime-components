import React, { createElement } from 'react';
import h from 'hyperscript-helpers';
import container from './container.css';

import Button from '../components/button.jsx';

import buttonNormalS from '../theme/islands/button-normal-s.css';
import buttonNormalM from '../theme/islands/button-normal-m.css';
import buttonNormalL from '../theme/islands/button-normal-l.css';
import buttonNormalXL from '../theme/islands/button-normal-xl.css';

import buttonActionS from '../theme/islands/button-action-s.css';
import buttonActionM from '../theme/islands/button-action-m.css';
import buttonActionL from '../theme/islands/button-action-l.css';
import buttonActionXL from '../theme/islands/button-action-xl.css';


import Input from '../components/input.jsx';

import input from '../theme/islands/input.css';


import Link from '../components/link.jsx';

import linkS from '../theme/islands/link-s.css';
import linkM from '../theme/islands/link-m.css';
import linkL from '../theme/islands/link-l.css';
import linkXL from '../theme/islands/link-xl.css';


import Textarea from '../components/textarea.jsx';


import Select from '../components/select.jsx';
import select from '../theme/islands/select.css';

const { div, h1 } = h(createElement);

const options = [
  {value: 'ava', label: 'ava'},
  {value: 'mocha', label: 'mocha'},
  {value: 'tape', label: 'tape'},
];

export default () => div(null,
  h1({className: container.header}, 'Buttons'),

  div({className: container.row},
    createElement(Button, {styles: buttonNormalS}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonNormalS}, 'button'),
  ),
  div({className: container.row},
    createElement(Button, {styles: buttonNormalM}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonNormalM}, 'button'),
  ),
  div({className: container.row},
    createElement(Button, {styles: buttonNormalL}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonNormalL}, 'button'),
  ),
  div({className: container.row},
    createElement(Button, {styles: buttonNormalXL}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonNormalXL}, 'button'),
  ),

  div({className: container.row},
    createElement(Button, {styles: buttonActionS}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonActionS}, 'button'),
  ),
  div({className: container.row},
    createElement(Button, {styles: buttonActionM}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonActionM}, 'button'),
  ),
  div({className: container.row},
    createElement(Button, {styles: buttonActionL}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonActionL}, 'button'),
  ),
  div({className: container.row},
    createElement(Button, {styles: buttonActionXL}, 'button'), ' ',
    createElement(Button, {disabled: true, styles: buttonActionXL}, 'button'),
  ),

  h1({className: container.header}, 'Links'),

  div({className: container.row},
    createElement(Link, {href: '#', styles: buttonNormalS}, 'link'), ' ',
    createElement(Link, {href: '#', styles: buttonNormalM}, 'link'), ' ',
    createElement(Link, {href: '#', styles: buttonNormalL}, 'link'), ' ',
    createElement(Link, {href: '#', styles: buttonNormalXL}, 'link')
  ),
  div({className: container.row},
    createElement(Link, {href: '#', styles: buttonActionS}, 'link'), ' ',
    createElement(Link, {href: '#', styles: buttonActionM}, 'link'), ' ',
    createElement(Link, {href: '#', styles: buttonActionL}, 'link'), ' ',
    createElement(Link, {href: '#', styles: buttonActionXL}, 'link')
  ),
  div({className: container.row},
    createElement(Link, {href: '#', styles: linkS}, 'link'), ' ',
    createElement(Link, {href: '#', styles: linkM}, 'link'), ' ',
    createElement(Link, {href: '#', styles: linkL}, 'link'), ' ',
    createElement(Link, {href: '#', styles: linkXL}, 'link')
  ),

  h1({className: container.header}, 'Text fields'),

  div({className: container.row},
    createElement(Input, {name: 'i', placeholder: 'Введите текст', styles: input}), ' ',
    createElement(Input, {disabled: true, name: 'di', placeholder: 'Введите текст', styles: input})
  ),
  div({className: container.row},
    createElement(Textarea, {name: 'ta', placeholder: 'Введите текст', styles: input}), ' ',
    createElement(Textarea, {disabled: true, name: 'dta', placeholder: 'Введите текст', styles: input})
  ),

  h1({className: container.header}, 'Select'),

  div({className: container.row},
    createElement(Select, {options, styles: select})
  )
);
