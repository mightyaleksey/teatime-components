'use strict';

const { Component, PropTypes } = require('react');
const { bind, hasValueProp, indexOf } = require('../tool/component');
const { classNames, composition } = require('../tool/className');
const { findDOMNode } = require('react-dom');
const { generateId, hasUniqueValues, mapKey, mapKeyBasedOnPos } = require('../tool/identity');
const { isUndefined, noop } = require('../tool/func');
const Button = require('./Button');
const Option = require('./Option');
const Overlay = require('./Overlay');
const React = require('react');
const reactOutsideEvent = require('../mixin/ReactOutsideEvent');
const warning = require('../tool/warning');

var didWarnForDefaultValue = false;

class Select extends Component {
  constructor(props) {
    super(props);

    bind(this, [
      'onKeyDown',
      'onMenuToggle',
      'onOptionFocus',
      'onOptionSelect',
    ]);

    this.controlled = hasValueProp(props);

    if (process.env.NODE_ENV !== 'production' && this.controlled && !didWarnForDefaultValue) { // eslint-disable-line no-undef
      warning(isUndefined(props.defaultValue),
        'Select elements must be either controlled or uncontrolled ' +
        '(specify either the value prop, or the defaultValue prop, but not ' +
        'both). Decide between using a controlled or uncontrolled select ' +
        'element and remove one of these props. More info: ' +
        'https://fb.me/react-controlled-components');

      didWarnForDefaultValue = true;
    }

    this.updateKeyMapper(props.hasUniqValues, props.options);

    var value = this.controlled
      ? props.value
      : props.defaultValue;

    var selected = !isUndefined(value)
      ? indexOf(props.options, value)
      : 0; // in case of uncontrolled component

    this.state = {
      focused: -1,
      isOpened: false,
      prefix: generateId(),
      selected,
    };
  }

  componentDidUpdate() {
    if (this.refs.menu && this.refs.selected && this.state.isOpened && !this.wereOptionsShown) {
      this.wereOptionsShown = true;

      const menu = findDOMNode(this.refs.menu);
      const selected = findDOMNode(this.refs.selected);
      menu.scrollTop = selected.offsetTop;
    } else if (!this.state.isOpened) {
      this.wereOptionsShown = false;
    }

    if (this.wasKeyPressed && this.refs.menu && this.refs.selected) {
      this.wasKeyPressed = false;

      const menu = findDOMNode(this.refs.menu);
      const selected = findDOMNode(this.refs.selected);
      const menuRect = menu.getBoundingClientRect();
      const selectedRect = selected.getBoundingClientRect();
      if (selectedRect.bottom > menuRect.bottom || selectedRect.top < menuRect.top) {
        menu.scrollTop = selected.offsetTop + selected.clientHeight - menu.offsetHeight;
      }
    }
  }

  componentWillReceiveProps({ hasUniqValues, options, value }) {
    if (this.controlled) {
      this.setState({
        selected: indexOf(options, value),
      });
    }

    if (this.props.hasUniqValues !== hasUniqValues) {
      this.updateKeyMapper(hasUniqValues, options);
    }
  }

  closeMenu() {
    this.setState({
      isOpened: false,
      focused: -1,
    });
  }

  openMenu() {
    this.setState({
      isOpened: true,
      focused: this.state.selected,
    });
  }

  focus() {
    if (this.refs.label) {
      this.refs.label.focus();
    }
  }

  focusNextOption() {
    const nextFocused = this.state.focused + 1;
    if (nextFocused === this.props.options.length) return;
    this.wasKeyPressed = true;
    this.setState({focused: nextFocused});
  }

  focusPreviousOption() {
    const { focused } = this.state;
    if (focused === 0) return;
    this.wasKeyPressed = true;
    this.setState({focused: focused === -1
      ? this.props.options.length - 1
      : focused - 1});
  }

  /**
   * @param  {number} selected
   * @return {string}
   */
  getSelectedLabel(selected) {
    return selected !== -1
      ? this.props.options[selected].label
      : this.props.placeholder;
  }

  /**
   * @param  {number} selected
   * @return {string}
   */
  getSelectedValue(selected) {
    return selected !== -1
      ? this.props.options[selected].value
      : '';
  }

  onKeyDown(e) {
    if (this.props.disabled) return;

    const { isOpened } = this.state;

    switch (e.keyCode) {
    case 9: // tab
      if (!isOpened) return;
      return void this.closeMenu();

    case 13: // enter
      if (!isOpened) return;
      e.stopPropagation();
      this.updateValue(e, this.state.focused);
      break;

    case 27: // esc
      if (!isOpened) return;
      this.closeMenu();
      this.focus();
      break;

    case 32: // space
      if (!isOpened) {
        this.openMenu();
      } else {
        this.updateValue(e, this.state.focused);
      }

      break;

    case 38: // up
      if (!isOpened) {
        this.openMenu();
      } else {
        this.focusPreviousOption();
      }

      break;

    case 40: // down
      if (!isOpened) {
        this.openMenu();
      } else {
        this.focusNextOption();
      }

      break;

    default:
      return;
    }

    e.preventDefault();
  }

  onMenuToggle() {
    if (this.state.isOpened) {
      return void this.closeMenu();
    }

    return void this.openMenu();
  }

  onOptionFocus(e, _, tc) {
    if (this.state.focused === tc) return;
    this.setState({focused: tc});
  }

  onOptionSelect(e, _, tc) {
    this.updateValue(e, tc);
    this.focus();
  }

  onOutsideEvent() {
    if (!this.state.isOpened) return;
    this.closeMenu();
  }

  /**
   * @param  {object} e
   * @param  {number} nextSelected
   */
  updateValue(e, nextSelected) {
    const nextState = {isOpened: false};

    if (nextSelected === -1 || nextSelected === this.state.selected) {
      return void this.setState(nextState);
    }

    if (!this.controlled) {
      nextState.selected = nextSelected;
    }

    this.setState(nextState);
    this.props.onChange(e, {value: this.props.options[nextSelected].value});
  }

  /**
   * @param {boolean} hasUniqValues
   * @param {object[]} options
   */
  updateKeyMapper(hasUniqValues, options) {
    this.mapKey = !(hasUniqValues && hasUniqueValues(options))
      ? mapKeyBasedOnPos
      : mapKey;
  }

  render() {
    return (
      <div
        {...this.props}
        className={composition(this.props)}
        onKeyDown={this.onKeyDown}>
        {this.renderLabel()}
        {this.renderMenu()}
        <input
          disabled={this.props.disabled}
          name={this.props.name}
          type='hidden'
          value={this.getSelectedValue(this.state.selected)}/>
      </div>
    );
  }

  renderLabel() {
    return (
      <Button
        className={this.props.styles[this.state.isOpened ? 'isOpened' : 'isClosed']}
        disabled={this.props.disabled}
        onClick={this.onMenuToggle}
        ref='label'
        styles={this.props.styles}>
        {this.getSelectedLabel(this.state.selected)}
      </Button>
    );
  }

  renderMenu() {
    const { styles } = this.props;

    if (!this.state.isOpened) {
      return null;
    }

    return (
      <Overlay
        className={styles.menu}
        ref='menu'>
        {this.renderOptions()}
      </Overlay>
    );
  }

  /**
   * @param  {option} option
   * @return {string}
   */
  renderOption(option) {
    return option.label;
  }

  renderOptions() {
    if (!this.state.isOpened) {
      return null;
    }

    const { options, styles } = this.props;
    const { focused, prefix, selected } = this.state;
    const renderOption = this.props.renderOption || this.renderOption;

    return options.map((option, i) => {
      const isFocused = focused === i;
      const isSelected = selected === i;
      const ref = isFocused
        ? 'selected'
        : null;

      return (
        <Option
          {...option}
          className={classNames(styles.item, {
            [styles.isFocused]: isFocused,
            [styles.isSelected]: isSelected,
          })}
          isFocused={isFocused}
          key={this.mapKey(prefix, option.value, i)}
          onFocus={this.onOptionFocus}
          onSelect={this.onOptionSelect}
          ref={ref}
          tc={i}>
          {renderOption(option)}
        </Option>
      );
    });
  }
}

Select.defaultProps = {
  hasUniqValues: true,
  onChange: noop,
  placeholder: '—',
  styleName: 'wrapper',
  styles: {},
};

Select.propTypes = {
  hasUniqValues: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  renderOption: PropTypes.func,
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
