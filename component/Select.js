'use strict';
/* eslint-disable max-len */
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
  map,
  noop,
  omit,
  prop,
} = require('../lib/dash');
const {findDOMNode} = require('react-dom');
const {isControlled, themes} = require('../lib/tool');
const Option = require('../view/Option');
const Overlay = require('../view/Overlay');
const React = require('react');
const findIndex = require('lodash.findIndex');
const searchEngine = require('../lib/searchEngine');
const cc = require('classnames');

const cssModules = {
  m: require('../style/select/select-m.css'),
  s: require('../style/select/select-s.css'),
  xs: require('../style/select/select-xs.css'),
};

const omitProps = omit([
  'searchEngine',
  'styles',
]);

class Select extends Component {
  constructor(props) {
    super(props);

    this._controlled = isControlled(props);
    this._styles = themes(this.token);

    const searchEngine = this._searchEngine = getSearchEngine(props.searchEngine);
    const searchValue = '';
    const value = this._controlled
      ? props.value
      : props.defaultValue;

    const menuItems = this._menuItems = calculateMenuItems(
      searchEngine,
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
      styles: this._styles(props),
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

      if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
        menuElem.scrollTop = focusedElem.offsetTop + menuElem.clientHeight - menuElem.offsetHeight;
      }
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.searchEngine !== this.props.searchEngine) {
      this._searchEngine = getSearchEngine(nextProps.searchEngine);
    }

    const {options} = this.props;
    const {searchValue} = this.state;

    if (nextProps.options !== options || nextState.searchValue !== searchValue) {
      this._menuItems = calculateMenuItems(
        this._searchEngine,
        nextProps.options,
        nextState.searchValue
      );
    }
  }

  focus() {
    if (!this._controlRef) return;
    this._controlRef.focus();
  }

  token = prop('size')

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
    const {focusedIndex, isOpened, selectedIndex} = this.state;
    const length = this._menuItems.length;
    let nextFocusedIndex = focusedIndex + offset;

    if (isOpened) {
      this._wasKeyPressed = true;

      nextFocusedIndex = offset > 0
        ? Math.min(nextFocusedIndex, length - 1)
        : Math.max(nextFocusedIndex, 0);
    } else {
      nextFocusedIndex = selectedIndex > -1
        ? selectedIndex
        : (offset > 0 ? 0 : length - 1);
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
    this.setState({
      isOpened: false,
      isPseudoFocused: true,
      selectedIndex: focusedIndex,
      searchValue: '',
      selectedPosition: this._menuItems[focusedIndex]._position,
    });

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
      if (isOpened) {
        this._onItemSelect(null, this.state.focusedIndex);
      } else {
        this._openMenu();
      }

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
    this._closeMenu();
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

  _parentNode = () => {
    return this._parentRef;
  }

  render() {
    const {
      className,
      disabled,
      hasFixedWidth,
      name,
      options,
      placeholder,
      renderOption = this.renderItemLabel,
      searchable,
      searchEmptyText,
      ...other,
    } = this.props;

    const {
      focusedIndex,
      isOpened,
      isPseudoFocused,
      searchValue,
      selectedPosition,
      styles,
    } = this.state;

    const label = selectedPosition > -1
      ? options[selectedPosition].label
      : placeholder;

    const {
      wrapper,
      search,
      control,
      arrow,
      menu,
      menuItem,
      emptyItem,
      isFixedMenu,
      isFocusedMenuItem,
      isOpenedMenu,
      isPseudoFocusedSearch,
      isSelectedMenuItem,
    } = styles;

    // deps: focusedIndex|selectedPosition|_menuItems|classNames
    // @todo move to the separeted method
    const menuItems = this._menuItems.length === 0
      ? this.renderEmptyItem({
        children: searchEmptyText,
        className: emptyItem,
      })
      : map(option =>
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
          }), this._menuItems);

    return (
      <div
        {...omitProps(other)}
        className={cc(wrapper, className)}
        ref={r => this._parentRef = r}>
        {this.renderValue({
          disabled,
          name,
          type: 'hidden',
          value: '',
        })}
        {this.renderSearch({
          className: cc(search, {
            [isPseudoFocusedSearch]: isPseudoFocused
          }),
          disabled,
          onChange: this._onSearchValueChange,
          onKeyDown: this._onKeyDown,
          ref: searchable
            ? r => this._controlRef = r
            : null,
          value: searchValue,
        })}
        {this.renderLabel({
          children: searchValue ? '' : label,
          className: control,
          disabled,
          onClick: this._onToggleMenu,
          onKeyDown: this._onKeyDown,
          ref: searchable
            ? null
            : r => this._controlRef = r,
        })}
        {this.renderArrow({
          className: cc(arrow, {
            [isOpenedMenu]: isOpened,
          }),
          onClick: this._onToggleMenu,
        })}
        {this.renderMenu({
          children: menuItems,
          className: cc(menu, {
            [isFixedMenu]: hasFixedWidth
          }),
          onOutsideClick: this._onOutsideClick,
          parentNode: this._parentNode,
          ref: r => this._menuRef = r,
        })}
      </div>
    );
  }

  renderValue(valueProps) {
    return (
      <input {...valueProps}/>
    );
  }

  renderSearch(inputProps) {
    if (!this.props.searchable) return null;

    return (
      <input {...inputProps}/>
    );
  }

  renderLabel(labelProps) {
    if (this.props.searchable) {
      return (
        <span {...labelProps}/>
      );
    }
    return (
      <button {...labelProps}/>
    );
  }

  renderArrow(arrowProps) {
    return (
      <i {...arrowProps}/>
    );
  }

  renderMenu(menuProps) {
    if (!this.state.isOpened) return null;

    return (
      <Overlay {...menuProps}/>
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
  placeholder: '—',
  searchable: false,
  searchEmptyText: 'No results found',
  searchEngine: 'fuzzy',
  size: 's',
  styles: cssModules,
};

Select.propTypes = {
  hasFixedWidth: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool,
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
    'm',
    's',
    'xs',
  ]),
  styles: PropTypes.object,
};

module.exports = Select;

// todo use understandable names for index and position
// calculateMenuItems :: (a -> q -> bool) -> [a] -> q -> [b]
function calculateMenuItems(searchEngine, items, needle = '') {
  const length = items.length;
  const availableItems = [];
  var nextLength = 0;

  for (var i = 0; i < length; ++i) {
    const item = items[i];

    if (!searchEngine(needle, item.label)) continue;
    availableItems.push(assign(item, {_index: nextLength++, _position: i}));
  }

  return availableItems;
}

// getSearchEngine :: a -> func
function getSearchEngine(engine = constant(true)) {
  if (isFunction(engine)) return engine;
  if (isString(engine)) return searchEngine[engine]; // check existance
}
