'use strict';

const { Component, PropTypes } = require('react');
const { bind, composition, decrement, increment, findIndexByValueProp, noop } = require('../tools/func');
const { findDOMNode } = require('react-dom');
const { generateId, isUnique, mapKey, mapKeyBasedOnPos } = require('../tools/identity');
const Button = require('./Button');
const Option = require('./Option');
const Popup = require('./Popup');
const React = require('react');
const cx = require('classnames');
const reactOutsideEvent = require('../mixin/ReactOutsideEvent');

class Select extends Component {
  constructor(props) {
    super(props);

    // @todo add assertion for defaultValue
    this.controlled = props.value !== undefined;
    this.updateKeyMapper(props.hasUniqValues, props.options);

    this.state = {
      isOpened: false,
      focused: -1,
      prefix: generateId(),
      selected: this.getSelectedOption(props.options, props.value),
    };

    bind(this, [
      'onButtonClick',
      'onKeyDown',
      'onOptionFocus',
      'onOptionSelect',
    ]);
  }

  componentDidUpdate() {
    // @todo scroll on keyboard shortcuts
    if (this.refs.menu && this.refs.selected && this.state.isOpened && !this.optionInView) {
      const menu = findDOMNode(this.refs.menu);
      const selected = findDOMNode(this.refs.selected);

      menu.scrollTop = selected.offsetTop;
      this.optionInView = true;
    } else if (!this.state.isOpened) {
      this.optionInView = false;
    }
  }

  componentWillReceiveProps({ hasUniqValues, options, value }) {
    if (this.controlled) {
      this.setState({
        selected: this.getSelectedOption(options, value),
      });
    }

    if (this.props.hasUniqValues !== hasUniqValues) {
      this.updateKeyMapper(hasUniqValues, options);
    }
  }

  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
  }

  /**
   * @return {string}
   */
  getSelectedLabel() {
    const { selected } = this.state;

    return selected !== -1
      ? this.props.options[selected].label
      : '—';
  }

  /**
   * @todo add exception for unexisting values
   * @param  {object[]} options
   * @param  {string} value
   * @return {number}
   */
  getSelectedOption(options, value) {
    const selected = findIndexByValueProp(options, value);
    return !this.props.hasEmptyValue
      ? Math.max(selected, 0)
      : selected;
  }

  onButtonClick() {
    if (this.state.isOpened) {
      this.setState({
        isOpened: false,
      });
    } else {
      this.setState({
        focused: this.state.selected,
        isOpened: true,
      });
    }
  }

  onKeyDown(e) {
    if (this.props.disabled) return;

    const { focused, isOpened, selected } = this.state;

    switch (e.keyCode) {
    case 27: // esc
      if (isOpened) {
        this.setState({
          isOpened: false,
        });
      }

      this.focus();
      break;

    case 9: // tab
      if (isOpened) {
        this.setState({
          isOpened: false,
        });
      }

      return;

    case 13: // enter
    case 32: // space
      if (isOpened) {
        if (focused > -1 && focused !== selected) {
          this.updateValue(e, focused);
        } else {
          this.setState({
            isOpened: false,
            selected: focused > -1
              ? focused
              : selected,
          });
        }
      } else {
        this.setState({
          focused: selected,
          isOpened: true,
        });
      }

      break;

    case 38: // up
      if (!isOpened) {
        this.setState({
          focused: selected,
          isOpened: true,
        });
      } else {
        this.setState({
          focused: decrement(focused, this.props.options.length),
        });
      }

      break;

    case 40: // down
      if (!isOpened) {
        this.setState({
          focused: selected,
          isOpened: true,
        });
      } else {
        this.setState({
          focused: increment(focused, this.props.options.length),
        });
      }

      break;
    }

    e.preventDefault();
  }

  onOptionFocus(e, _, tc) {
    if (this.state.focused !== tc) {
      this.setState({
        focused: tc,
      });
    }
  }

  onOptionSelect(e, _, tc) {
    this.updateValue(e, tc);
    this.focus();
  }

  onOutsideEvent() {
    if (this.state.isOpened) {
      this.setState({
        isOpened: false,
      });
    }
  }

  /**
   * @param {boolean} hasUniqValues
   * @param {object[]} options
   */
  updateKeyMapper(hasUniqValues, options) {
    this.mapKey = !(hasUniqValues && isUnique(options))
      ? mapKeyBasedOnPos
      : mapKey;
  }

  updateValue(e, tc) {
    if (!this.controlled) {
      this.setState({
        isOpened: false,
        selected: tc,
      });
    } else {
      this.setState({
        isOpened: false,
      });
    }

    this.props.onChange(e, {value: this.props.options[tc].value});
  }

  render() {
    const { disabled, id, name, options } = this.props;
    const value = options[Math.max(this.state.selected, 0)].value;

    return (
      <div
        {...this.props}
        className={composition(this.props)}
        onKeyDown={this.onKeyDown}>
        {this.renderButton()}
        {this.renderPopup()}
        <input
          disabled={disabled}
          id={id}
          name={name}
          type='hidden'
          value={value}/>
      </div>
    );

  }

  renderButton() {
    const { disabled, styles } = this.props;

    const mixin = styles[this.state.isOpened
      ? 'isOpened'
      : 'isClosed'];

    return (
      <Button
        className={mixin}
        disabled={disabled}
        onClick={this.onButtonClick}
        ref='control'
        styles={styles}>
        {this.getSelectedLabel()}
      </Button>
    );
  }

  renderPopup() {
    const { styles } = this.props;

    if (!this.state.isOpened) {
      return null;
    }

    return (
      <Popup
        ref='menu'
        styleName='menu'
        styles={styles}>
        {this.renderOptions()}
      </Popup>
    );
  }

  renderOptions() {
    if (!this.state.isOpened) {
      return null;
    }

    const { options, styles } = this.props;
    const { focused, prefix, selected } = this.state;

    return options.map((option, i) => {
      const isFocused = focused === i;
      const isSelected = selected === i;
      const ref = isFocused
        ? 'selected'
        : null;

      return (
        <Option
          {...option}
          className={cx(styles.item, {
            [styles.isFocused]: isFocused,
            [styles.isSelected]: isSelected,
          })}
          isFocused={isFocused}
          key={this.mapKey(prefix, option.value, i)}
          onFocus={this.onOptionFocus}
          onSelect={this.onOptionSelect}
          ref={ref}
          tc={i}/>
      );
    });
  }
}

Select.defaultProps = {
  hasEmptyValue: false,
  hasUniqValues: true,
  onChange: noop,
  styleName: 'wrapper',
  styles: {},
};

Select.propTypes = {
  hasEmptyValue: PropTypes.bool,
  hasUniqValues: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array,
  styleName: PropTypes.string,
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
    isClosed: PropTypes.string.isRequired,
    isFocused: PropTypes.string.isRequired,
    isOpened: PropTypes.string.isRequired,
    isSelected: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
    wrapper: PropTypes.string,
  }),
};

module.exports = reactOutsideEvent(Select, ['click']);
