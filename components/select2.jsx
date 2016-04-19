import React, { Component } from 'react';
import reactOutsideEvent from 'react-outside-event';
import find from 'lodash.find';
import get from 'lodash.get';

import Button from './button.jsx';

class Option extends Component {
  render() {
    const { children, className, onClick } = this.props;

    return (
      <span onClick={ onClick } className={ className }>{ children }</span>
    );
  }
}

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
      if (!this.state.isOpened) this.setState({isOpened: true});
      break;
    case 40:
      if (!this.state.isOpened) this.setState({isOpened: true});
      break;
    default:
      return;
    }

    e.preventDefault();
  }

  onOptionClick(e, value) {
    this.setState({isOpened: false, value});
  }

  onOutsideEvent() {
    this.setState({isOpened: false});
  }

  render() {
    const { disabled, name, options, styles = {} } = this.props;
    const { isOpened, value } = this.state;
    const { controlIsClosed, controlIsOpened, menuIsClosed, menuIsOpened } = styles;

    return (
      <div onKeyDown={ e => this.onKeyDown(e) } className={ styles.container }>
        <Button
          onClick={ e => this.onClick(e) }
          disabled={ disabled }
          styles={{control: isOpened ? controlIsOpened : controlIsClosed}}
        >{ find(options, {value}).label }</Button>
        <div className={ isOpened ? menuIsOpened : menuIsClosed }>
          { this.renderMenu(options, value, styles) }
        </div>
        <input disabled={ disabled } name={ name } type='hidden' value={ value }/>
      </div>
    );
  }

  /**
   * @param  {object[]} options
   * @param  {string} value
   * @param  {object} styles
   * @return {array}
   */
  renderMenu(options, value, styles) {
    return options.map((o, i) => <Option
      onClick={ e => this.onOptionClick(e, o.value) }
      className={ styles[ o.value === value ? 'menuItemIsSelected' : 'menuItem' ] }
      key={ `${i}${o.value}` }
    >{ o.label }</Option>);
  }
}

Select.displayName = 'Select';
Select.propTypes = {
  defaultValue: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  styles: React.PropTypes.object,
};

export default reactOutsideEvent(Select, ['click']);
