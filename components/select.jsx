import React, { Component } from 'react';
import reactOutsideEvent from 'react-outside-event';

import Button from './button.jsx';
import Option from './option.jsx';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      value: props.defaultValue || '',
    };
  }

  handleClick(e) {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleSelect(e, value) {
    this.setState({isOpen: false, value});
  }

  onOutsideEvent() {
    this.setState({isOpen: false});
  }

  render() {
    const { options, placeholder, styles } = this.props;
    const { isOpen, value: selectedValue } = this.state;
    const preview = findLabel(options, selectedValue);
    const menuItems = options.map((o, i) => (
      <Option { ...o } key={ `${i}${o.value}` } onClick={ e => this.handleSelect(e, o.value) } styles={ styles }/>
    ));

    const stylesForControl = !preview ? { ...styles, control: styles.controlWithEmptyValue } : styles;

    return (
      <div className={ styles.container }>
        <Button onClick={ e => this.handleClick(e) } styles={ stylesForControl }>{ preview || placeholder }</Button>
        <div className={ styles[isOpen ? 'menuIsOpen' : 'menuIsClosed'] }>{ menuItems }</div>
      </div>
    );
  }
}

Select.displayName = 'Select';
Select.propTypes = {
  defaultValue: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  placeholder: React.PropTypes.string,
  styles: React.PropTypes.object,
};

export default reactOutsideEvent(Select, ['click']);

function findLabel(arr, val) {
  var length = arr.length;
  for (; length--;) {
    if (arr[length].value === val) {
      return arr[length].label;
    }
  }

  return null;
}
