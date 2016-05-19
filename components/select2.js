import { h, PropTypes } from '../h';
import { Component } from 'react';
import { button } from './button';
import { option } from './option';
import reactOutsideEvent from 'react-outside-event';

const { createTag, div, input } = h;

class Select extends Component {
  constructor(props) {
    super(props);

    const value = props.defaultValue; // || get(props, 'options[0].value');
    const position = -1; // getIndex(props.options, value);

    this.state = {
      isOpened: false,
      position,
      selected: position,
      value,
    };

    this.onClick = this.onClick.bind(this);
    // this.onKeyDown = this.onKeyDown.bind(this);
    // this.onOptionClick = this.onOptionClick.bind(this);
  }

  onClick() {
    this.setState({isOpened: true});
  }

  onOutsideEvent() {
    this.setState({
      isOpened: false,
      selected: this.state.position,
    });
  }

  render() {
    const { disabled, styles } = this.props;
    const { isOpened, position, selected, value } = this.state;

    return div({className: styles.control},
      this.renderButton(isOpened
          ? styles.buttonIsOpened
          : styles.buttonIsClosed,
        disabled, 'label'),
      this.renderMenu(styles),
      input({disabled, type: 'hidden', value})
    );
  }

  renderButton(styles, disabled, label) {
    return button({disabled, onClick: this.onClick, styles}, label);
  }

  renderMenu(styles) {
    return div();
  }
}

Select.defaultProps = {
  options: [],
  styles: {},
};

const select = reactOutsideEvent(Select, ['click']);
const selectHelper = createTag(select);

export { select as default, selectHelper as select };
