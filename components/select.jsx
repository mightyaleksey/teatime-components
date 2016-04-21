import Button from './button.jsx';
import React, { Component, createElement } from 'react';
import find from 'lodash.find';
import get from 'lodash.get';
import h from 'hyperscript-helpers';
import reactOutsideEvent from 'react-outside-event';

const { div, input, span } = h(createElement);

class Option extends Component {
  render() {
    const { children, className, onClick } = this.props;

    return span({onClick, className}, children);
  }
}

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      selected: -1,
      value: props.defaultValue || get(props, 'options[0].value', ''),
    };

    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
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

    return div({onKeyDown: this.onKeyDown, className: styles.container},
      createElement(Button, {
        onClick: this.onClick,
        disabled,
        styles: {
          control: isOpened
            ? controlIsOpened
            : controlIsClosed,
        }
      }, find(options, {value}).label),
      div({
        className: isOpened
          ? menuIsOpened
          : menuIsClosed,
      }, this.renderMenu(options, value, styles)),
      input({disabled, name, type: 'hidden', value})
    );
  }

  /**
   * @param  {object[]} options
   * @param  {string} value
   * @param  {object} styles
   * @return {array}
   */
  renderMenu(options, value, styles) {
    return options.map((o, i) => createElement(Option, {
      onClick: e => this.onOptionClick(e, o.value),
      className: styles[ o.value === value ? 'menuItemIsSelected' : 'menuItem' ],
      key: `${i}${o.value}`,
    }, o.label));
  }
}

Select.displayName = 'Select';
Select.defaultProps = {
  options: [],
  styles: {},
},
Select.propTypes = {
  defaultValue: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  styles: React.PropTypes.object,
};

export default reactOutsideEvent(Select, ['click']);
