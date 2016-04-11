import React, { Component } from 'react';

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, styles, ...o } = this.props;

    return (
      <div { ...o } className={ styles.menuItem }>{ label }</div>
    );
  }
}

Option.displayName = 'Option';
Option.propTypes = {
  label: React.PropTypes.string,
  selected: React.PropTypes.bool,
  styles: React.PropTypes.object,
  value: React.PropTypes.string,
};

export default Option;
