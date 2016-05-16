import { get } from 'lodash';
import { h, PropTypes } from '../h';
import { button } from './button';
import { Component } from 'react';
import reactOutsideEvent from 'react-outside-event';

const { createTag, div, input, span } = h;
const option = createTag(Option);

function Option({ checked, children, selected, styles, ...o }) {
  return span({...o}, children);
}

class Select extends Component {
  constructor(props) {
    super(props);

    const value = props.defaultValue || get(props, 'options[0].value');
    const position = getIndex(props.options, value);

    this.state = {
      isOpened: false,
      position,
      selected: position,
      value,
    };

    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
  }

  onClick() {
    this.setState({isOpened: true});
  }

  /**
   * http://facebook.github.io/react/docs/events.html#keyboard-events
   *
   * @param {object} e
   * @param {number} e.keyCode
   */
  onKeyDown(e) {
    if (this.props.disabled) return;
    e.preventDefault();

    const { options } = this.props;
    let { isOpened, selected } = this.state;

    switch (e.keyCode) {
    case 27: // esc
      return this.setState({isOpened: false, selected: position});
    case 38: // up
      if (!isOpened) return this.setState({isOpened: true});
      --selected;
      if (selected === -1) selected = options.length - 1;
      return this.setState({selected});
    case 40: // down
      if (!isOpened) return this.setState({isOpened: true});
      ++selected;
      if (selected === options.length) selected = 0;
      return this.setState({selected});
    }
  }

  onOptionClick(e, position, value) {
    this.setState({
      isOpened: false,
      position,
      selected: position,
      value,
    });
  }

  onOutsideEvent() {
    this.setState({
      isOpened: false,
      selected: this.state.position,
    });
  }

  render() {
    const { disabled, styles } = this.props;

    return div({className: styles.container, onKeyDown: this.onKeyDown},
      this.renderButton(),
      this.renderMenu(),
      input({disabled, type: 'hidden'})
    );
  }

  renderButton() {
    const { disabled, options, styles } = this.props;
    const { position } = this.state;
    const content = get(options, `[${position}].label`, '');
    return button({disabled, onClick: this.onClick, styles}, content);
  }

  renderMenu() {
    const { options, styles } = this.props;
    const { isOpened, position, selected } = this.state;
    const menu = options.map(({ label, value }, i) => option({
      key: `${i}${value}`,
      onClick: e => this.onOptionClick(e, i, value),
      checked: position === i,
      selected: selected === i,
      styles,
    }, label));

    return div({className: isOpened ? styles.menuIsOpened : styles.menuIsClosed}, menu);
  }
}

Select.defaultProps = {
  options: [],
  styles: {},
};
Select.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  styles: PropTypes.object,
};

export default reactOutsideEvent(Select, ['click']);

function getIndex(options, value) {
  for (var i = 0; i < options.length; ++i) {
    if (options[i].value !== value) {
      continue;
    }

    return i;
  }

  return -1;
}

// import Button from './button.js';
// import React, { Component, createElement } from 'react';
// import find from 'lodash.find';
// import get from 'lodash.get';
// import h from 'hyperscript-helpers';
// import reactOutsideEvent from 'react-outside-event';

// const { div, input, span } = h(createElement);

// class Option extends Component {
//   render() {
//     const { children, className, onClick } = this.props;

//     return span({onClick, className}, children);
//   }
// }

// class Select extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpened: false,
//       selected: -1,
//       value: props.defaultValue || get(props, 'options[0].value', ''),
//     };

//     this.onClick = this.onClick.bind(this);
//     this.onKeyDown = this.onKeyDown.bind(this);
//   }

//   onClick() {
//     this.setState({isOpened: !this.state.isOpened});
//   }

//   /**
//    * http://facebook.github.io/react/docs/events.html#keyboard-events
//    *
//    * @param {object} e
//    * @param {number} e.keyCode
//    */
//   onKeyDown(e) {
//     if (this.props.disabled) return;

//     switch (e.keyCode) {
//     case 38:
//       if (!this.state.isOpened) this.setState({isOpened: true});
//       break;
//     case 40:
//       if (!this.state.isOpened) this.setState({isOpened: true});
//       break;
//     default:
//       return;
//     }

//     e.preventDefault();
//   }

//   onOptionClick(e, value) {
//     this.setState({isOpened: false, value});
//   }

//   onOutsideEvent() {
//     this.setState({isOpened: false});
//   }

//   render() {
//     const { disabled, name, options, styles = {} } = this.props;
//     const { isOpened, value } = this.state;
//     const { controlIsClosed, controlIsOpened, menuIsClosed, menuIsOpened } = styles;

//     return div({onKeyDown: this.onKeyDown, className: styles.container},
//       createElement(Button, {
//         onClick: this.onClick,
//         disabled,
//         styles: {
//           control: isOpened
//             ? controlIsOpened
//             : controlIsClosed,
//         }
//       }, find(options, {value}).label),
//       div({
//         className: isOpened
//           ? menuIsOpened
//           : menuIsClosed,
//       }, this.renderMenu(options, value, styles)),
//       input({disabled, name, type: 'hidden', value})
//     );
//   }

//   /**
//    * @param  {object[]} options
//    * @param  {string} value
//    * @param  {object} styles
//    * @return {array}
//    */
//   renderMenu(options, value, styles) {
//     return options.map((o, i) => createElement(Option, {
//       onClick: e => this.onOptionClick(e, o.value),
//       className: styles[ o.value === value ? 'menuItemIsSelected' : 'menuItem' ],
//       key: `${i}${o.value}`,
//     }, o.label));
//   }
// }

// Select.displayName = 'Select';
// Select.defaultProps = {
//   options: [],
//   styles: {},
// },
// Select.propTypes = {
//   defaultValue: React.PropTypes.string,
//   options: React.PropTypes.array.isRequired,
//   styles: React.PropTypes.object,
// };

// export default reactOutsideEvent(Select, ['click']);
