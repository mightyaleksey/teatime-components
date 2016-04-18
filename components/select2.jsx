import React, { Component } from 'react';
import reactOutsideEvent from 'react-outside-event';
import find from 'lodash.find';
import get from 'lodash.get';

import Button from './button.jsx';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      value: props.defaultValue || get(props, 'options[0].value', ''),
    };
  }

  onClick() {
    this.setState({isOpened: !this.state.isOpened});
  }

  /**
   * http://facebook.github.io/react/docs/events.html#keyboard-events
   *
   * @param {object} e
   * @param {number} e.keyCode
   */
  onKeyDown(e) {
    if (this.props.disabled) return;

    switch (e.keyCode) {
    case 38:
      break;
    case 40:
      break;
    default:
      return;
    }

    e.preventDefault();
  }

  onOutsideEvent() {
    this.setState({isOpened: false});
  }

  render() {
    const { disabled, name, options, styles } = this.props;
    const { isOpened, value } = this.state;

    return (
      <div onKeyDown={ e => this.onKeyDown(e) } className={ styles.container }>
        <Button
          onClick={ e => this.onClick(e) }
          disabled={ disabled }
          styles={{control: styles[isOpened ? 'controlIsOpened' : 'controlIsClosed']}}
        >{ find(options, {value}).label }</Button>
        <div className={ styles[isOpened ? 'menuIsOpened' : 'menuIsClosed'] }>
          yo
        </div>
        <input disabled={ disabled } name={ name } type='hidden'/>
      </div>
    );
  }
}

Select.displayName = 'Select';
Select.propTypes = {
  defaultValue: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  styles: React.PropTypes.object,
};

export default reactOutsideEvent(Select, ['click']);
