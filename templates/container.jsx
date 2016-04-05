import React from 'react';
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

export default () => (
  <div>
    <h1 className={ container.header }>Кнопки</h1>

    <p>
      <Button styles={ buttonNormalS }>button</Button> <Button disabled={ true } styles={ buttonNormalS }>button</Button>
    </p>
    <p>
      <Button styles={ buttonNormalM }>button</Button> <Button disabled={ true } styles={ buttonNormalM }>button</Button>
    </p>
    <p>
      <Button styles={ buttonNormalL }>button</Button> <Button disabled={ true } styles={ buttonNormalL }>button</Button>
    </p>
    <p>
      <Button styles={ buttonNormalXL }>button</Button> <Button disabled={ true } styles={ buttonNormalXL }>button</Button>
    </p>

    <p>
      <Button styles={ buttonActionS }>button</Button> <Button disabled={ true } styles={ buttonActionS }>button</Button>
    </p>
    <p>
      <Button styles={ buttonActionM }>button</Button> <Button disabled={ true } styles={ buttonActionM }>button</Button>
    </p>
    <p>
      <Button styles={ buttonActionL }>button</Button> <Button disabled={ true } styles={ buttonActionL }>button</Button>
    </p>
    <p>
      <Button styles={ buttonActionXL }>button</Button> <Button disabled={ true } styles={ buttonActionXL }>button</Button>
    </p>


    <h1 className={ container.header }>Текстовые поля</h1>
    <p>
      <Input placeholder='Введите текст' styles={ input }/> <Input disabled={ true } placeholder='Введите текст' styles={ input }/>
    </p>
  </div>
);
