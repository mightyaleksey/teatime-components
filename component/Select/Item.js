/* @flow */
import React, {Component} from 'react';

type Props = {
  children: any,
  className: string,
  index: number,
  onClick: Function,
  onFocus: Function,
  value: any,
};

class Item extends Component {
  constructor(props: Props) {
    super(props);

    (this:any)._onClick = this._onClick.bind(this);
    (this:any)._onFocus = this._onFocus.bind(this);
  }

  _onClick(e: SyntheticEvent) {
    this.props.onClick(e, this.props.index);
  }

  _onFocus(e: SyntheticEvent) {
    this.props.onFocus(e, this.props.index);
  }

  render() {
    const {
      children,
      className,
      value,
    } = this.props;

    return (
      <span
        className={className}
        data-value={value}
        onClick={this._onClick}
        onMouseEnter={this._onFocus}
        role='option'>
        {children}
      </span>
    );
  }
}

export default Item;
