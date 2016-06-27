'use strict';

const { Component, PropTypes } = require('react');
const { bind, hasValueProp, indexOf } = require('../tool/component');
const { classNames, styleName } = require('../tool/className');
const { constant } = require('../tool/func');
const { findDOMNode } = require('react-dom');
const { generateId, hasUniqueValues, mapKey, mapKeyBasedOnPos } = require('../tool/identity');
const { isUndefined, noop } = require('../tool/func');
const Option = require('./Option');
const Overlay = require('./Overlay');
const React = require('react');
const fuzzysearch = require('fuzzysearch');
const reactOutsideEvent = require('../mixin/ReactOutsideEvent');
const warning = require('../tool/warning');

var didWarnForDefaultValue = false;

class Select extends Component {
  constructor(props) {
    super(props);

    bind(this, [
      'onControlBlur',
      'onControlFocus',
      'onInputChange',
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
      inFocus: false,
      inputValue: '',
      isOpened: false,
      prefix: generateId(),
      selected,
    };
  }

  closeMenu() {
    this.setState({
      isOpened: false,
      focused: -1,
      inputValue: '',
    });
  }

  openMenu() {
    this.setState({
      isOpened: true,
      focused: this.state.selected,
    });
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
   * @param  {object} option
   * @param  {string} option.label
   * @return {string}
   */
  getHaystack(option) {
    return option.label;
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

  onControlBlur() {}

  onControlFocus() {
    if (this._openAfterFocus !== false) {
      return void this.setState({
        isOpened: true,
      });
    }

    this.__openAfterFocus = true;
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
      isOpened: true,
    });
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
      if (this.props.isSearchable) return;

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

  /**
   * @param {object} e
   * @param {*} _
   * @param {number} tc
   */
  onOptionFocus(e, _, tc) {
    if (this.state.focused === tc) return;
    this.setState({focused: tc});
  }

  /**
   * @param {object} e
   * @param {*} _
   * @param {number} tc
   */
  onOptionSelect(e, _, tc) {
    this._openAfterFocus = false;
    this.updateValue(e, tc);
    this.focus();
  }

  onOutsideEvent() {
    this._openAfterFocus = true;
    if (!this.state.isOpened) return;
    this.closeMenu();
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

  /**
   * @param {object} e
   * @param {number} nextSelected
   */
  updateValue(e, nextSelected) {
    const nextState = {isOpened: false};

    if (nextSelected === -1 || nextSelected === this.state.selected) {
      return void this.setState(nextState);
    }

    if (!this.controlled) {
      nextState.selected = nextSelected;
    }

    if (this.props.isSearchable) {
      nextState.inputValue = '';
    }

    this.setState(nextState);
    this.props.onChange(e, {value: this.props.options[nextSelected].value});
  }

  render() {
    return (
      <div className={styleName(this.props, {isFixedWrapper: this.props.hasFixedWidth})}>
        {this.renderValue()}
        {this.renderLabel()}
        {this.renderMenu()}
      </div>
    );
  }

  renderLabel() {
    const { styles } = this.props;

    if (!this.props.isSearchable) {
      return (
        <button
          className={classNames(styles.control, {
            [styles.isClosedControl]: !this.state.isOpened,
            [styles.isOpenedControl]: this.state.isOpened,
          })}
          disabled={this.props.disabled}
          onClick={this.onMenuToggle}
          onKeyDown={this.onKeyDown}
          ref='label'
          tabIndex={this.props.tabIndex || 0}>
          {this.getSelectedLabel(this.state.selected)}
        </button>
      );
    }

    return (
      <span
        className={classNames(styles.control, {
          [styles.isClosedControl]: !this.state.isOpened,
          [styles.isOpenedControl]: this.state.isOpened,
        })}>
        {this.state.inputValue ? '' : this.getSelectedLabel(this.state.selected)}
        <input
          className={this.props.styles.input}
          disabled={this.props.disabled}
          onBlur={this.onControlBlur}
          onChange={this.onInputChange}
          onFocus={this.onControlFocus}
          onKeyDown={this.onKeyDown}
          ref='label'
          tabIndex={this.props.tabIndex || 0}
          type='text'
          value={this.state.inputValue}/>
      </span>
    );
  }

  renderMenu() {
    const { styles } = this.props;

    return (
      <Overlay
        className={classNames(styles.menu, {
          [styles.isFixedMenu]: this.props.hasFixedWidth,
          [styles.isClosedMenu]: !this.state.isOpened,
          [styles.isOpenedMenu]: this.state.isOpened,
        })}
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

    const { hasFixedWidth, isSearchable, options, styles } = this.props;
    const { focused, prefix, selected } = this.state;
    const inputValue = this.state.inputValue.toLowerCase();
    const filter = isSearchable
      ? fuzzysearch
      : constant(true);

    const getHaystack = this.props.getHaystack || this.getHaystack;
    const renderOption = this.props.renderOption || this.renderOption;
    const list = [];

    for (var length = options.length, i = 0; i < length; ++i) {
      const option = options[i];

      if (!filter(inputValue, getHaystack(option).toLowerCase())) {
        continue;
      }

      const isFocused = focused === i;
      const isSelected = selected === i;
      const ref = isFocused
        ? 'selected'
        : null;

      list.push((
        <Option
          {...option}
          className={classNames(styles.item, {
            [styles.isFixedItem]: hasFixedWidth,
            [styles.isFocusedItem]: isFocused,
            [styles.isSelectedItem]: isSelected,
          })}
          isFocused={isFocused}
          key={this.mapKey(prefix, option.value, i)}
          onFocus={this.onOptionFocus}
          onSelect={this.onOptionSelect}
          ref={ref}
          tc={i}>
          {renderOption(option)}
        </Option>
      ));
    }

    if (isSearchable && list.length === 0) {
      return (
        <Option
          className={styles.empty}>
          {this.props.noResults}
        </Option>
      );
    }

    return list;
  }

  renderValue() {
    return (
      <input
        className={this.props.styles.native}
        disabled={this.props.disabled}
        name={this.props.name}
        type='hidden'
        value={this.getSelectedValue(this.state.selected)}/>
    );
  }
}

Select.defaultProps = {
  hasFixedWidth: true,
  hasUniqValues: true,
  isSearchable: false,
  noResults: 'No results found',
  onChange: noop,
  placeholder: '—',
  styleName: 'wrapper',
  styles: {},
};

Select.propTypes = {
  getHaystack: PropTypes.func,
  hasFixedWidth: PropTypes.bool,
  hasUniqValues: PropTypes.bool,
  isSearchable: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noResults: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  renderOption: PropTypes.func,
  styleName: PropTypes.string,
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
    empty: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    isClosedControl: PropTypes.string.isRequired,
    isClosedMenu: PropTypes.string.isRequired,
    isFixedItem: PropTypes.string.isRequired,
    isFixedMenu: PropTypes.string.isRequired,
    isFixedWrapper: PropTypes.string.isRequired,
    isFocusedItem: PropTypes.string.isRequired,
    isOpenedControl: PropTypes.string.isRequired,
    isOpenedMenu: PropTypes.string.isRequired,
    isSelectedItem: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    wrapper: PropTypes.string,
  }),
};

module.exports = reactOutsideEvent(Select, ['click']);
