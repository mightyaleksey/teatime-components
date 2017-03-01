'use strict';

const {
  ARROR_DOWN,
  ARROR_UP,
  ENTER,
  ESC,
  SPACE,
  TAB,
} = require('../lib/keyCode');
const {Component, PropTypes} = require('react');
const {
  assign,
  constant,
  isFunction,
  isString,
  isUndefined,
  mapN,
  noop,
  prop,
} = require('../lib/dash');
const {findDOMNode} = require('react-dom');
const {filterProps, isControlled, genericName} = require('../lib/util');
const Option = require('../view/Option');
const Overlay = require('../view/Overlay');
const React = require('react');
const findIndex = require('lodash.findindex');
const searchEngine = require('../lib/searchEngine');
const cc = require('classnames');
const warn = require('../lib/warn');

const cssModules = {
  l: require('../style/select/select-l.css'),
  m: require('../style/select/select-m.css'),
  s: require('../style/select/select-s.css'),
};

const byLabel = prop('label');

let didWarnForSelectDefaultValue = false;

class Select extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);

    if (process.env.NODE_ENV !== 'production')
      if (this._controlled && !isUndefined(props.defaultValue) && !didWarnForSelectDefaultValue) {
        didWarnForSelectDefaultValue = true;
        warn(true, 'defaultValue', 'Select', 'hidden');
      }

    const searchableValue = !isUndefined(props.searchableValue)
      ? props.searchableValue
      : byLabel;

    const searchEngine = this._searchEngine = getSearchEngine(props.searchEngine);
    const searchValue = '';
    const value = this._controlled
      ? props.value
      : props.defaultValue;

    const menuItems = this._menuItems = calculateMenuItems(
      searchEngine,
      searchableValue,
      props.options,
      searchValue
    );

    const selectedIndex = !isUndefined(value)
      ? findIndex(menuItems, item => item.value === value)
      : -1;

    this.state = {
      focusedIndex: -1,
      isOpened: false,
      isPseudoFocused: true,
      searchValue,
      selectedIndex,
      selectedPosition: selectedIndex,
    };
  }

  componentDidUpdate() {
    const {isOpened} = this.state;
    const focusedItemRef = this._focusedItemRef;
    const menuRef = this._menuRef;

    if (menuRef && focusedItemRef && isOpened && !this._wasMenuShown) {
      this._wasMenuShown = true;

      const menuElem = findDOMNode(menuRef);
      const focusedElem = findDOMNode(focusedItemRef);

      menuElem.scrollTop = focusedElem.offsetTop;
    } else if (!isOpened) {
      this._wasMenuShown = false;
    }

    if (menuRef && focusedItemRef && this._wasKeyPressed) {
      this._wasKeyPressed = false;

      const menuElem = findDOMNode(menuRef);
      const focusedElem = findDOMNode(focusedItemRef);

      const menuRect = menuElem.getBoundingClientRect();
      const focusedRect = focusedElem.getBoundingClientRect();

      if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top)
        menuElem.scrollTop = focusedElem.offsetTop + menuElem.clientHeight - menuElem.offsetHeight;
    }
  }

  componentWillReceiveProps(nextProps) {
    this._controlled = isControlled(nextProps);

    const {
      options,
      searchEngine,
      searchableValue = byLabel,
    } = this.props;

    if (nextProps.searchEngine !== searchEngine)
      this._searchEngine = getSearchEngine(nextProps.searchEngine);

    if (nextProps.options !== options)
      this._menuItems = calculateMenuItems(
        this._searchEngine,
        searchableValue,
        nextProps.options,
        this.state.searchValue
      );

    const nextValue = nextProps.value;
    const selectedPosition = this._controlled
      ? findIndex(this._menuItems, item => item.value === nextValue)
      : this.state.selectedPosition;

    this.setState({
      selectedIndex: selectedPosition,
      selectedPosition: selectedPosition > -1
        ? this._menuItems[selectedPosition]._position
        : -1,
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const {searchableValue = byLabel} = this.props;
    const {searchValue} = this.state;

    if (nextState.searchValue !== searchValue)
      this._menuItems = calculateMenuItems(
        this._searchEngine,
        searchableValue,
        nextProps.options,
        nextState.searchValue
      );
  }

  css = tokenName => genericName(this.props, tokenName)

  focus() {
    if (!this._controlRef) return;
    this._controlRef.focus();
  }

  _closeMenu() {
    this.setState({
      focusedIndex: -1,
      isOpened: false,
      isPseudoFocused: true,
      searchValue: '',
    });
  }

  _openMenu() {
    const {selectedIndex} = this.state;

    this.setState({
      focusedIndex: Math.max(selectedIndex, 0),
      isOpened: true,
    });
  }

  _focusAdjacentItem(offset = 1) {
    const {optionsLimit} = this.props;
    const {focusedIndex, isOpened, selectedIndex} = this.state;
    const length = this._menuItems.length;
    let nextFocusedIndex = focusedIndex + offset;

    if (isOpened) {
      this._wasKeyPressed = true;

      nextFocusedIndex = offset > 0
        ? Math.min(nextFocusedIndex, length - 1, optionsLimit - 1)
        : Math.max(nextFocusedIndex, 0);
    } else {
      nextFocusedIndex = selectedIndex > -1
        ? selectedIndex
        : offset > 0 ? 0 : Math.min(length - 1, optionsLimit - 1);
    }

    this.setState({
      focusedIndex: nextFocusedIndex,
      isOpened: true,
    });
  }

  _onFocusItem = (e, focusedIndex) => {
    this.setState({
      focusedIndex,
    });
  }

  _onItemSelect = (e, focusedIndex) => {
    const menuItem = this._menuItems[focusedIndex];
    const nextState = {
      isOpened: false,
      isPseudoFocused: true,
      searchValue: '',
    };

    if (!this._controlled) {
      nextState.selectedIndex = focusedIndex;
      nextState.selectedPosition = menuItem._position;
    }

    this.setState(nextState);
    this.props.onChange(e, {value: menuItem.value});

    this.focus();
  }

  _onKeyDown = e => {
    if (this.props.disabled) return;

    const {isOpened} = this.state;
    const {searchable} = this.props;

    switch (e.keyCode) {
    case ESC:
      if (!isOpened) return; // pass event to the native element

      // capture event and close menu
      this._closeMenu();
      this.focus();
      break;

    case TAB:
      if (isOpened) this._closeMenu();

      return; // pass event to the native element

    case ARROR_DOWN:
      this._focusAdjacentItem();
      break; // capture event

    case ARROR_UP:
      this._focusAdjacentItem(-1);
      break; // capture event

    case ENTER:
      if (isOpened) this._onItemSelect(null, this.state.focusedIndex);
      else this._openMenu();

      e.stopPropagation();
      break;

    case SPACE:
      if (!searchable && isOpened) this._onItemSelect(null, this.state.focusedIndex);
      break;

    default:
      if (searchable && isOpened) this.setState({focusedIndex: 0, selectedIndex: -1});

      return; // pass event to the native element
    }

    e.preventDefault();
  }

  _onOutsideClick = () => {
    if (this.state.isOpened) this._closeMenu();
  }

  _onSearchValueClick = () => {
    this.setState({
      isOpened: true,
      isPseudoFocused: false,
    });
  }

  _onSearchValueChange = e => {
    this.setState({
      isPseudoFocused: false,
      searchValue: e.target.value,
    });

    if (!this.state.isOpened) this._openMenu();
  }

  _onToggleMenu = () => {
    if (this.props.disabled) return;

    this.state.isOpened
      ? this._closeMenu()
      : this._openMenu();

    this.focus();
  }

  _parentNode = () => this._parentRef

  computeMenuItems(menuItems) {
    if (!this.state.isOpened) return null;

    const {css} = this;

    if (menuItems.length === 0)
      return this.renderEmptyItem({
        children: this.props.searchEmptyText,
        className: css('emptyItem'),
      });

    const {
      focusedIndex,
      selectedPosition,
    } = this.state;

    const {
      optionsLimit,
      renderOption = this.renderItemLabel,
    } = this.props;

    const isFocusedMenuItem = css('isFocusedMenuItem');
    const isSelectedMenuItem = css('isSelectedMenuItem');
    const menuItem = css('menuItem');

    return mapN(option =>
      this.renderMenuItem({
        children: renderOption(option),
        className: cc(menuItem, {
          [isFocusedMenuItem]: focusedIndex === option._index,
          [isSelectedMenuItem]: selectedPosition === option._position,
        }),
        key: option.value,
        onClick: this._onItemSelect,
        onFocus: this._onFocusItem,
        position: option._index,
        ref: focusedIndex === option._index
          ? r => this._focusedItemRef = r
          : null,
        value: option.value,
      }), menuItems, optionsLimit);
  }

  render() {
    const {className} = this.props;
    const {css} = this;

    return (
      <span
        {...filterProps(this.props)}
        className={cc(css('wrapper'), className)}
        onChange={void 0}
        ref={r => this._parentRef = r}>
        {this.renderValue()}
        <span className={css('baseline')}>
          {this.renderSearch()}
          {this.renderLabel()}
          {this.renderArrow()}
        </span>
        {this.renderMenu()}
      </span>
    );
  }

  renderValue() {
    const {disabled, id, name, options} = this.props;
    const {selectedPosition} = this.state;

    return (
      <input
        disabled={disabled}
        id={id}
        name={name}
        type='hidden'
        value={selectedPosition > -1
          ? options[selectedPosition].value
          : ''}/>
    );
  }

  renderSearch() {
    if (!this.props.searchable) return null;

    const {disabled, searchable} = this.props;
    const {isPseudoFocused, searchValue} = this.state;
    const {css} = this;

    return (
      <input
        className={cc(css('search'), {
          [css('isPseudoFocusedSearch')]: isPseudoFocused,
        })}
        disabled={disabled}
        onClick={this._onSearchValueClick}
        onChange={this._onSearchValueChange}
        onKeyDown={this._onKeyDown}
        ref={searchable
          ? r => this._controlRef = r
          : null}
        role='combobox'
        value={searchValue}/>
    );
  }

  renderLabel() {
    const {disabled, options, placeholder, searchable} = this.props;
    const {isPseudoFocused, selectedPosition} = this.state;
    const {css} = this;

    const hasValue = selectedPosition > -1;
    const label = hasValue
      ? options[selectedPosition].label
      : placeholder;

    const labelProps = {
      children: isPseudoFocused
        ? label
        : '',
      className: cc(css('control'), {
        [css('hasPlaceholder')]: !hasValue,
      }),
      disabled,
      onClick: this._onToggleMenu,
      onKeyDown: this._onKeyDown,
      ref: searchable
        ? null
        : r => this._controlRef = r,
    };

    if (searchable) return <span {...labelProps}/>;

    return (
      <button {...labelProps}/>
    );
  }

  renderArrow() {
    const {isOpened} = this.state;
    const {css} = this;

    return (
      <i
        className={cc(css('arrow'), {
          [css('isOpenedMenu')]: isOpened,
        })}
        onClick={this._onToggleMenu}/>
    );
  }

  renderMenu() {
    const {hasFixedWidth} = this.props;
    const {isOpened} = this.state;
    const {css} = this;

    return (
      <Overlay
        className={cc(css('menu'), {
          [css('isClosedMenu')]: !isOpened,
          [css('isFixedMenu')]: hasFixedWidth,
        })}
        onOutsideClick={this._onOutsideClick}
        parentNode={this._parentNode}
        ref={r => this._menuRef = r}
        role='listbox'>
        {this.computeMenuItems(this._menuItems)}
      </Overlay>
    );
  }

  renderMenuItem(itemProps) {
    return (
      <Option {...itemProps}/>
    );
  }

  renderEmptyItem(itemProps) {
    return (
      <span {...itemProps}/>
    );
  }

  renderItemLabel(option) {
    return option.label;
  }
}

Select.defaultProps = {
  hasFixedWidth: false,
  onChange: noop,
  optionsLimit: Infinity,
  placeholder: '—',
  searchable: false,
  searchEmptyText: 'No results found',
  searchEngine: 'fuzzy',
  size: 'm',
  styles: cssModules,
};

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  hasFixedWidth: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  optionsLimit: PropTypes.number,
  placeholder: PropTypes.string,
  renderOption: PropTypes.func,
  searchable: PropTypes.bool,
  searchableValue: PropTypes.func,
  searchEmptyText: PropTypes.string,
  searchEngine: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf([
      'fuzzy',
      'includes',
      'startsWith',
    ]),
  ]),
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
  ]),
  styles: PropTypes.object,
  value: PropTypes.any,
};

module.exports = Select;

// todo use understandable names for index and position
// calculateMenuItems :: (a -> q -> bool) -> ({a} -> a) -> [a] -> q -> [b]
function calculateMenuItems(searchEngine, searchableValue, items, needle = '') {
  const length = items.length;
  const availableItems = [];
  let nextLength = 0;

  for (let i = 0; i < length; ++i) {
    const item = items[i];

    if (!searchEngine(needle, searchableValue(item))) continue;
    availableItems.push(assign(item, {
      _index: nextLength++,
      _position: i,
    }));
  }

  return availableItems;
}

// getSearchEngine :: a -> func
function getSearchEngine(engine = constant(true)) {
  if (isFunction(engine)) return engine;
  if (isString(engine)) return searchEngine[engine]; // check existance
}
