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


import Link from '../components/link.jsx';

import linkS from '../theme/islands/link-s.css';
import linkM from '../theme/islands/link-m.css';
import linkL from '../theme/islands/link-l.css';
import linkXL from '../theme/islands/link-xl.css';


import Select from '../components/select.jsx';

import selectS from '../theme/islands/select-s.css';
import selectM from '../theme/islands/select-m.css';
import selectL from '../theme/islands/select-l.css';
import selectXL from '../theme/islands/select-xl.css';


import Textarea from '../components/textarea.jsx';


import Select2 from '../components/select2.jsx';
import select2 from '../theme/islands/select2.css';

const options = [
  {value: 'ava', label: 'ava'},
  {value: 'mocha', label: 'mocha'},
  {value: 'tape', label: 'tape'},
];

export default () => (
  <div>
    <h1 className={ container.header }>Buttons</h1>

    <div className={ container.row }>
      <Button styles={ buttonNormalS }>button</Button> <Button disabled={ true } styles={ buttonNormalS }>button</Button>
    </div>
    <div className={ container.row }>
      <Button styles={ buttonNormalM }>button</Button> <Button disabled={ true } styles={ buttonNormalM }>button</Button>
    </div>
    <div className={ container.row }>
      <Button styles={ buttonNormalL }>button</Button> <Button disabled={ true } styles={ buttonNormalL }>button</Button>
    </div>
    <div className={ container.row }>
      <Button styles={ buttonNormalXL }>button</Button> <Button disabled={ true } styles={ buttonNormalXL }>button</Button>
    </div>

    <div className={ container.row }>
      <Button styles={ buttonActionS }>button</Button> <Button disabled={ true } styles={ buttonActionS }>button</Button>
    </div>
    <div className={ container.row }>
      <Button styles={ buttonActionM }>button</Button> <Button disabled={ true } styles={ buttonActionM }>button</Button>
    </div>
    <div className={ container.row }>
      <Button styles={ buttonActionL }>button</Button> <Button disabled={ true } styles={ buttonActionL }>button</Button>
    </div>
    <div className={ container.row }>
      <Button styles={ buttonActionXL }>button</Button> <Button disabled={ true } styles={ buttonActionXL }>button</Button>
    </div>


    <h1 className={ container.header }>Links</h1>
    <div className={ container.row }>
      <Link href='#' styles={ buttonNormalS }>link</Link> <Link href='#' styles={ buttonNormalM }>link</Link> <Link href='#' styles={ buttonNormalL }>link</Link> <Link href='#' styles={ buttonNormalXL }>link</Link>
    </div>
    <div className={ container.row }>
      <Link href='#' styles={ buttonActionS }>link</Link> <Link href='#' styles={ buttonActionM }>link</Link> <Link href='#' styles={ buttonActionL }>link</Link> <Link href='#' styles={ buttonActionXL }>link</Link>
    </div>
    <div className={ container.row }>
      <Link href='#' styles={ linkS }>link</Link> <Link href='#' styles={ linkM }>link</Link> <Link href='#' styles={ linkL }>link</Link> <Link href='#' styles={ linkXL }>link</Link>
    </div>


    <h1 className={ container.header }>Text fields</h1>
    <div className={ container.row }>
      <Input name="input" placeholder='Введите текст' styles={ input }/> <Input disabled={ true } name="disabledInput" placeholder='Введите текст' styles={ input }/>
    </div>
    <div className={ container.row }>
      <Textarea name="textarea" placeholder='Введите текст' styles={ input }/> <Textarea disabled={ true } name="disabledTextarea" placeholder='Введите текст' styles={ input }/>
    </div>


    <h1 className={ container.header }>Select</h1>
    <div className={ container.row }>
      <Select2 options={ options } styles={ select2 }></Select2>
    </div>
    <div className={ container.row }>
      <Select options={ options } placeholder='test frameworks' styles={ selectS }/>
    </div>
    <div className={ container.row }>
      <Select options={ options } placeholder='test frameworks' styles={ selectM }/>
    </div>
    <div className={ container.row }>
      <Select options={ options } placeholder='test frameworks' styles={ selectL }/>
    </div>
    <div className={ container.row }>
      <Select options={ options } placeholder='test frameworks' styles={ selectXL }/>
    </div>
  </div>
);
