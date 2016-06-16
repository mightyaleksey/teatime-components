'use strict';

const { Component, PropTypes } = require('react');
const { bind, decrement, increment, findIndexByValueProp, noop } = require('../tools/func');
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
    this.updateKeyMapper(props.options);

    this.state = {
      isOpened: false,
      focused: -1,
      prefix: generateId(),
      selected: findIndexByValueProp(props.options, props.value),
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

  componentWillReceiveProps({ options, value }) {
    if (this.controlled) {
      this.setState({
        selected: findIndexByValueProp(options, value),
      });
    }

    if (this.props.options !== options) {
      this.updateKeyMapper(options);
    }
  }

  focus() {
    if (this.refs.control) {
      this.refs.control.focus();
    }
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

  updateKeyMapper(options) {
    this.mapKey = !isUnique(options)
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
    const { className, disabled, id, name, options, styleName, styles } = this.props;
    const value = options[Math.max(this.state.selected, 0)].value;

    return (
      <div
        {...this.props}
        className={cx(className, styles[styleName])}
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
    const { disabled, options, styles } = this.props;
    const { isOpened, selected } = this.state;

    const mixin = styles[isOpened
      ? 'isOpened'
      : 'isClosed'];

    return (
      <Button
        className={mixin}
        disabled={disabled}
        onClick={this.onButtonClick}
        ref='control'
        styles={styles}>
        {options[Math.max(selected, 0)].text}
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

    return options.map(({ text, value }, i) => (
      <Option
        checked={selected === i}
        focused={focused === i}
        key={this.mapKey(prefix, value, i)}
        onFocus={this.onOptionFocus}
        onSelect={this.onOptionSelect}
        ref={selected === i ? 'selected' : null}
        styles={styles}
        tc={i}
        value={value}>
        {text}
      </Option>
    ));
  }
}

Select.defaultProps = {
  onChange: noop,
  styleName: 'wrapper',
  styles: {},
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array,
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = reactOutsideEvent(Select, ['click']);
