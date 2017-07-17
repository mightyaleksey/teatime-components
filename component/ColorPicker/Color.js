/* @flow */
import React, {Component} from 'react';

type Props = {
  className: string,
  onClick: (e: SyntheticEvent, color: string) => void,
  value: string,
};

class Color extends Component {
  constructor(props: Props) {
    super(props);

    (this:any)._onClick = this._onClick.bind(this);
  }

  _onClick(e: SyntheticEvent) {
    this.props.onClick(e, this.props.value)
  }

  render() {
    const {className, value} = this.props;

    return (
      <span
        className={className}
        onClick={this._onClick}
        style={{
          backgroundColor: '#' + value,
        }}/>
    );
  }
}

export default Color;
