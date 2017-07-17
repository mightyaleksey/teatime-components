/* @flow */
import {
  ARROW_DOWN,
  ARROW_UP,
  ENTER,
  ESC,
  SPACE,
  TAB,
} from '../../lib/keyCode';
import {filterItems, isControlled, mapN, noop} from '../../lib/util';
import {findDOMNode} from 'react-dom';
import {getSearchEngine} from '../../lib/searchEngine';
import Item from './Item';
import React, {Component} from 'react'
import classNames from 'classnames';

import selectLarge from './select-large.css';
import selectMedium from './select-medium.css';
import selectSmall from './select-small.css';

type Option = {
  label: string,
  value: string,
};

type Props = {
  className?: string,
  defaultValue?: any,
  direction: 'bottom' | 'top',
  disabled: boolean,
  hasFixedWidth: boolean,
  id?: string,
  name: string,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  options: Array<Option>,
  optionsLimit: number,
  placeholder: string,
  searchable: boolean,
  searchableValue: Function,
  searchEmptyText: string,
  searchEngine: Function | 'fuzzy' | 'includes' | 'startsWith',
  size: 'l' | 'm' | 's',
  style?: Object,
  styles?: Object,
  value?: any,
};

type State = {
  focusedItemIndex: number,
  selectedItemPosition: number,
  inputValue: string,
  isInputInFocus: boolean,
  isMenuOpened: boolean,
};

type MenuItem = {
  _index: number,
  _position: number,
  label: string,
  value: string,
};

type ValueProps = {
  disabled?: boolean,
  name: string,
  type: 'hidden',
  value: string,
};

type SearchProps = {
  className: string,
  disabled?: boolean,
  onChange: Function,
  onClick: Function,
  onKeyDown: Function,
  ref: Function,
  role: 'combobox',
  value: string,
} | null;

type ControlProps = {
  children: string,
  className: string,
  disabled?: boolean,
  onClick: Function,
  onKeyDown: Function,
  ref?: Function,
  tabIndex?: string,
};

type ArrowProps = {
  className: string,
  onClick: Function,
};

type ItemProps = {
  children: string,
  className: string,
  index: number,
  key: string,
  onClick: Function,
  onFocus: Function,
  value: string,
};

type EmptyItemProps = {
  children: string,
  className: string,
};

type MenuProps = {
  children: any,
  className: string,
};

const cssModules = {
  l: selectLarge,
  m: selectMedium,
  s: selectSmall,
};

class Select extends Component {
  props: Props

  static defaultProps: {
    direction: 'bottom' | 'top',
    disabled: boolean,
    hasFixedWidth: boolean,
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    optionsLimit: number,
    placeholder: string,
    searchable: boolean,
    searchableValue: Function,
    searchEmptyText: string,
    searchEngine: Function | 'fuzzy' | 'includes' | 'startsWith',
    size: 'l' | 'm' | 's',
  }

  state: State

  css: {
    select: string,
    baseline: string,
    search: string,
    focused: string,
    control: string,
    arrow: string,
    menu: string,
    bottom: string,
    top: string,
    fixed: string,
    opened: string,
    menuItem: string,
    selected: string,
    emptyItem: string,
  }

  _controlled: boolean

  _controlElement: HTMLButtonElement | HTMLInputElement

  _menuElement: HTMLElement

  _menuItemElement: HTMLElement

  _searchEngine: Function

  _menuItems: Array<MenuItem>

  constructor(props: Props) {
    super(props);

    this._controlled = isControlled(props);
    this._searchEngine = getSearchEngine(props.searchEngine);
    this._menuItems = filterItems(
      this._searchEngine,
      props.searchableValue,
      props.options
    );

    const nextValue = this._controlled ? props.value : props.defaultValue;
    const focusedItemIndex = this._menuItems.findIndex(({value}) => value === nextValue);
    const selectedItemPosition = focusedItemIndex > -1
      ? this._menuItems[focusedItemIndex]._position
      : -1;

    this.state = {
      focusedItemIndex,
      selectedItemPosition,
      inputValue: '',
      isInputInFocus: false,
      isMenuOpened: false,
    };

    this.css = props.styles || cssModules[props.size];

    (this:any)._onControlClick = this._onControlClick.bind(this);
    (this:any)._onInputChange = this._onInputChange.bind(this);
    (this:any)._onInputClick = this._onInputClick.bind(this);
    (this:any)._onItemClick = this._onItemClick.bind(this);
    (this:any)._onItemFocus = this._onItemFocus.bind(this);
    (this:any)._onKeyDown = this._onKeyDown.bind(this);
    (this:any)._saveControlRef = this._saveControlRef.bind(this);
    (this:any)._saveMenuRef = this._saveMenuRef.bind(this);
    (this:any)._saveMenuItemRef = this._saveMenuItemRef.bind(this);
  }

  componentDidUpdate() {
    // const {isMenuOpened} = this.state;
    // const menuElement = this._menuElement;
    // const menuItemElement = this._menuItemElement;

    // if (menuElement && menuItemElement && isMenuOpened) {
    //   const menuNode = findDOMNode(menuElement);
    //   const menuItemNode = findDOMNode(menuItemElement);

    //   menuNode.scrollTop = menuItemNode.offsetTop;
    // }
  }

  componentWillReceiveProps(nextProps: Props) {
    this._controlled = isControlled(nextProps);

    if (nextProps.searchEngine !== this.props.searchEngine)
      this._searchEngine = getSearchEngine(nextProps.searchEngine);

    this.css = nextProps.styles || cssModules[nextProps.size];
  }

  componentWillUpdate(nextProps: Props, nextState: State) {
    const shouldUpdateMenuItems =
      nextProps.options !== this.props.options ||
      nextState.inputValue !== this.state.inputValue;

    if (shouldUpdateMenuItems)
      this._menuItems = filterItems(
        this._searchEngine,
        nextProps.searchableValue,
        nextProps.options,
        nextState.inputValue
      );

    if (this._controlled && nextProps.value !== this.props.value) {
      const nextValue = nextProps.value;
      const focusedItemIndex = this._menuItems.findIndex(({value}) => value === nextValue);
      const selectedItemPosition = focusedItemIndex > -1
        ? this._menuItems[focusedItemIndex]._position
        : -1;

      this.setState({focusedItemIndex, selectedItemPosition});
    } else if (shouldUpdateMenuItems) {
      const selectedItemPosition = this.state.selectedItemPosition;
      const focusedItemIndex = this._menuItems.findIndex(({_position}) => _position === selectedItemPosition);

      this.setState({focusedItemIndex});
    }
  }

  focus() {
    if (this._controlElement) this._controlElement.focus();
  }

  _computeValueProps(): ValueProps {
    const {disabled, name, options} = this.props;
    const {selectedItemPosition} = this.state;

    return {
      disabled,
      name,
      type: 'hidden',
      value: selectedItemPosition > -1
        ? options[selectedItemPosition].value
        : '',
    };
  }

  _computeSearchProps(): SearchProps {
    const {disabled, searchable} = this.props;

    if (!searchable) return null;

    const {inputValue, isInputInFocus} = this.state;
    const {css} = this;

    return {
      className: classNames(css.search, {
        [css.focused]: !isInputInFocus,
      }),
      disabled,
      // onBlur: this._onBlur,
      onChange: this._onInputChange,
      onClick: this._onInputClick,
      // onFocus: this._onFocus,
      onKeyDown: this._onKeyDown,
      ref: this._saveControlRef,
      role: 'combobox',
      value: inputValue,
    };
  }

  _computeControlProps(): ControlProps {
    const {disabled, options, placeholder, searchable} = this.props;
    const {isInputInFocus, selectedItemPosition} = this.state;
    const {css} = this;

    const label = selectedItemPosition > -1
      ? options[selectedItemPosition].label
      : placeholder;

    if (searchable) return {
      children: isInputInFocus ? '' : label,
      className: css.control,
      disabled,
      onClick: this._onControlClick,
      onKeyDown: this._onKeyDown,
      tabIndex: '-1',
    };

    return {
      children: isInputInFocus ? '' : label,
      className: css.control,
      disabled,
      // onBlur: this._onBlur,
      onClick: this._onControlClick,
      // onFocus: this._onFocus,
      onKeyDown: this._onKeyDown,
      ref: this._saveControlRef,
    };
  }

  _computeArrowProps(): ArrowProps {
    const {isMenuOpened} = this.state; // isMenuOpened
    const {css} = this;

    return {
      className: classNames(css.arrow, {
        [css.opened]: isMenuOpened,
      }),
      onClick: this._onControlClick,
    };
  }

  _computeMenuProps(): MenuProps {
    const {direction, hasFixedWidth} = this.props;
    const {isMenuOpened} = this.state;
    const {css} = this;

    const menuItems = this._computeMenuItems(this._menuItems);

    return {
      children: menuItems,
      className: classNames(css.menu, css[direction], {
        [css.fixed]: hasFixedWidth,
        [css.opened]: isMenuOpened,
      }),
      ref: this._saveMenuRef,
    };
  }

  _computeMenuItems(menuItems: Array<MenuItem>) {
    if (!this.state.isMenuOpened) return null;

    const {optionsLimit, searchEmptyText} = this.props;
    const {focusedItemIndex, selectedItemPosition} = this.state;
    const {css} = this;

    if (menuItems.length === 0) return this.renderEmptyItem({
      children: searchEmptyText,
      className: css.emptyItem,
    });

    return mapN(item => this.renderMenuItem({
      children: item.label,
      className: classNames(css.menuItem, {
        [css.focused]: item._index === focusedItemIndex,
        [css.selected]: item._position === selectedItemPosition,
      }),
      index: item._index,
      key: item.value,
      onClick: this._onItemClick,
      onFocus: this._onItemFocus,
      ref: item._index === focusedItemIndex
        ? this._saveMenuItemRef
        : null,
      value: item._value,
    }), menuItems, optionsLimit);
  }

  _focusAdjacentMenuItem(offset: number) {
    const {optionsLimit} = this.props;
    const {focusedItemIndex, isMenuOpened} = this.state;
    const length = Math.min(this._menuItems.length, optionsLimit);

    let nextFocusedItemIndex = focusedItemIndex + offset;
    if (isMenuOpened) {
      nextFocusedItemIndex = offset > 0
        ? Math.min(nextFocusedItemIndex, length - 1)
        : Math.max(nextFocusedItemIndex, 0);
    } else {
      nextFocusedItemIndex = nextFocusedItemIndex !== -2
        ? (nextFocusedItemIndex + length) % length
        : length - 1;
    }

    this.setState({
      focusedItemIndex: nextFocusedItemIndex,
      isMenuOpened: true,
    });
  }

  _onControlClick() {
    if (this.props.disabled) return;

    if (this.state.isMenuOpened)
      this.setState({
        inputValue: '',
        isInputInFocus: false,
        isMenuOpened: false,
      })
    else
      this.setState({
        isMenuOpened: true,
      });

    this.focus();
  }

  _onInputClick() {
    this.setState({
      isInputInFocus: true,
      isMenuOpened: true,
    });
  }

  _onInputChange(e: SyntheticInputEvent) {
    this.setState({
      inputValue: e.target.value,
      isInputInFocus: true,
      isMenuOpened: true,
    });
  }

  _onItemClick(e: SyntheticEvent, index: number) {
    const {name, onChange} = this.props;

    const selectedMenuItem = this._menuItems[index];
    const nextState = this._controlled
      ? {
        inputValue: '',
        isInputInFocus: false,
        isMenuOpened: false,
      }
      : {
        focusedItemIndex: index,
        selectedItemPosition: selectedMenuItem._position,
        inputValue: '',
        isInputInFocus: false,
        isMenuOpened: false,
      };

    this.setState(nextState);
    onChange(e, {name, value: selectedMenuItem.value});

    this.focus();
  }

  _onItemFocus(e: SyntheticEvent, index: number) {
    this.setState({focusedItemIndex: index});
  }

  _onKeyDown(e: SyntheticKeyboardEvent) {
    if (this.props.disabled) return;

    const {optionsLimit} = this.props;
    const {focusedItemIndex, isMenuOpened} = this.state;
    const length = this._menuItems.length;

    switch (e.keyCode) {
    case ESC:
      if (isMenuOpened) {
        this.setState({
          inputValue: '',
          isInputInFocus: false,
          isMenuOpened: false,
        });
        this.focus();
      }
      break;
    case TAB:
      if (isMenuOpened) {
        this.setState({
          inputValue: '',
          isInputInFocus: false,
          isMenuOpened: false,
        });
      }
      break;
    case ARROW_DOWN:
      this._focusAdjacentMenuItem(1);
      e.preventDefault();
      break;
    case ARROW_UP:
      this._focusAdjacentMenuItem(-1);
      e.preventDefault();
      break;
    case ENTER:
      if (isMenuOpened) {
        this._onItemClick(e, focusedItemIndex);
      } else {
        this._onInputClick();
      }
      e.preventDefault();
      break;
    }
  }

  _saveControlRef(ref: HTMLButtonElement | HTMLInputElement) {
    this._controlElement = ref;
  }

  _saveMenuRef(ref: HTMLElement) {
    this._menuElement = ref;
  }

  _saveMenuItemRef(ref: HTMLElement) {
    this._menuItemElement = ref;
  }

  render() {
    const {className, id, style} = this.props;
    const {css} = this;

    const valueProps = this._computeValueProps();
    const searchProps = this._computeSearchProps();
    const controlProps = this._computeControlProps();
    const arrowProps = this._computeArrowProps();
    const menuProps = this._computeMenuProps();

    return (
      <span
        className={classNames(css.select, className)}
        id={id}
        style={style}>
        {this.renderValue(valueProps)}
        <span className={css.baseline}>
          {this.renderSearch(searchProps)}
          {this.renderControl(controlProps)}
          {this.renderArrow(arrowProps)}
        </span>
        {this.renderMenu(menuProps)}
      </span>
    );
  }

  renderValue(valueProps: ValueProps) {
    return (
      <input {...valueProps}/>
    );
  }

  renderSearch(searchProps: SearchProps) {
    if (!searchProps) return null;

    return (
      <input {...searchProps}/>
    );
  }

  renderControl(controlProps: ControlProps) {
    return (
      <button {...controlProps}/>
    );
  }

  renderArrow(arrowProps: ArrowProps) {
    return (
      <span {...arrowProps}/>
    );
  }

  renderMenu(menuProps: MenuProps) {
    return (
      <div {...menuProps}/>
    );
  }

  renderMenuItem(itemProps: ItemProps) {
    return (
      <Item {...itemProps}/>
    );
  }

  renderEmptyItem(emptyItemProps: EmptyItemProps) {
    return (
      <span {...emptyItemProps}/>
    );
  }
}

Select.defaultProps = {
  direction: 'bottom',
  disabled: false,
  hasFixedWidth: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  optionsLimit: Infinity,
  placeholder: '—',
  searchable: false,
  searchableValue: a => a.label,
  searchEmptyText: 'No results found',
  searchEngine: 'fuzzy',
  size: 'm',
};

export default Select;
