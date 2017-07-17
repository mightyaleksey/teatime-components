/* @flow */
import {buildValueHash, chunk, isControlled, map, noop, valuesFromHash} from '../../lib/util';
import Check from '../Check';
import React, {Component} from 'react';
import classNames from 'classnames';

import checkGroupLarge from './checkGroup-large.css';
import checkGroupMedium from './checkGroup-medium.css';

type Item = {
  label: string,
  value: string,
};

type Props = {
  className?: string,
  cols: number,
  defaultValue?: Array<string>,
  disabled: boolean,
  name: string,
  onChange: Function,
  options: Array<Item>,
  size: 'l' | 'm',
  style?: Object,
  styles?: Object,
  value?: Array<string>,
};

type CheckProps = {
  className: string,
  disabled: boolean,
  key: string,
  name: string,
  onChange: Function,
  size: 'l' | 'm',
  value: string,
};

type ColumnProps = {
  children: any,
  className: string,
  key: string,
};

const cssModules = {
  l: checkGroupLarge,
  m: checkGroupMedium,
};

class CheckGroup extends Component {
  props: Props

  static defaultProps: {
    cols: number,
    disabled: boolean,
    onChange: Function,
    size: 'l' | 'm',
  }

  state: {
    values: Object,
  }

  css: {
    checkGroup: string,
    column: string,
    check: string,
  }

  _controlled: boolean

  constructor(props: Props) {
    super(props);

    this._controlled = isControlled(props);

    const value = this._controlled
      ? props.value
      : props.defaultValue;

    this.state = {
      values: buildValueHash(props.options, value),
    };

    this.css = props.styles || cssModules[props.size];

    (this:any)._onChange = this._onChange.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this._controlled = isControlled(nextProps);

    if (
      this._controlled &&
      (
        nextProps.options !== this.props.options ||
        nextProps.value !== this.props.value
      )
    ) {
      const {options, value} = nextProps;

      this.setState({
        values: buildValueHash(options, value),
      });
    }

    this.css = nextProps.styles || cssModules[nextProps.size];
  }

  focus() {} // noop

  _computeItems(options: Array<Item>) {
    const {disabled, name, size} = this.props;
    const {values} = this.state;
    const {css} = this;

    return map(item => this.renderCheck(Object.assign({}, item, {
      checked: values[item.value],
      className: css.check,
      disabled: item.disabled || disabled,
      key: item.value,
      name,
      onChange: this._onChange,
      size,
    })), options);
  }

  _computeColumns(checks: Array<mixed>) {
    const {cols} = this.props;
    const {css} = this;

    const chunkSize = Math.ceil(checks.length / cols)
    const columns = chunk(checks, chunkSize);

    let index = 0;

    return map(children => this.renderColumn({
      children,
      className: css.column,
      key: String(++index),
    }), columns);
  }

  _onChange(e: SyntheticInputEvent, {checked, value}: Object) {
    const {name, onChange} = this.props;
    const {values} = this.state;
    const nextValues = Object.assign({}, values, {[value]: checked});

    if (!this._controlled) {
      this.setState({values: nextValues});
    }

    const nextValue = valuesFromHash(nextValues);
    onChange(e, {name, value: nextValue});
  }

  render() {
    const {className, style} = this.props;
    const {css} = this;

    const items = this._computeItems(this.props.options);
    const columns = this._computeColumns(items);

    return (
      <div className={classNames(css.checkGroup, className)} style={style}>
        {columns}
      </div>
    );
  }

  renderCheck(checkProps: CheckProps) {
    return (
      <Check {...checkProps}/>
    );
  }

  renderColumn(columnProps: ColumnProps) {
    return (
      <div {...columnProps}/>
    );
  }
}

CheckGroup.defaultProps = {
  cols: 1,
  disabled: false,
  onChange: noop,
  size: 'm',
};

export default CheckGroup;
