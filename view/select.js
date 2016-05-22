'use strict';

const { Component, PropTypes } = require('react');
const { Button } = require('./button');
const { Option } = require('./option');
const { createTag, div, input } = require('../');
const { bind, decrement, increment } = require('../tools/func');
const cssModules = require('react-css-modules');
const reactOutsideEvent = require('react-outside-event');

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      position: 0,
      selected: 0,
      value: props.defaultValue || props.value || props.options[0].value,
    };

    bind(this, [
      'onClick',
      'onKeyDown',
      'onOptionClick',
      'onOptionMouseEnter',
    ]);
  }

  // https://github.com/sullenor/teatime-components/blob/c01b639d39ab9c7ac387724c330cb9f11066749c/components/select.js
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
    if (e.keyCode === 9) return this.setState({isOpened: false});
    e.preventDefault();

    const { options } = this.props;
    const { isOpened, position, selected } = this.state;

    switch (e.keyCode) {
    case 13: // enter
    case 32: // space
      return this.setState({
        isOpened: false,
        selected: position,
        value: this.props.options[position].value,
      });
    case 27: // esc
      return this.setState({isOpened: false, position: selected});
    case 38: // up
      if (!isOpened) return this.setState({isOpened: true});
      return this.setState({position: decrement(position, options.length)});
    case 40: // down
      if (!isOpened) return this.setState({isOpened: true});
      return this.setState({position: increment(position, options.length)});
    }
  }

  onOptionClick(e, i) {
    this.setState({
      isOpened: false,
      position: i,
      selected: i,
      value: this.props.options[i].value,
    });
  }

  onOptionMouseEnter(e, i) {
    this.setState({position: i});
  }

  onOutsideEvent() {
    this.setState({isOpened: false});
  }

  render() {
    const { disabled, name, onChange } = this.props;
    const { isOpened, value } = this.state;

    return div({onKeyDown: this.onKeyDown, styleName: 'container'},
      this.renderButton(),
      isOpened
        ? div({styleName: 'popup'}, this.renderOptions())
        : null,
      input({disabled, name, onChange, type: 'hidden', value})
    );
  }

  renderButton() {
    const { disabled, styles } = this.props;
    const { isOpened, value } = this.state;

    return Button({
      disabled,
      onClick: this.onClick,
      styles: styles[isOpened
        ? 'buttonOpened'
        : 'buttonClosed'],
    }, value);
  }

  renderOptions() {
    const { options, styles } = this.props;
    const { position, selected } = this.state;

    return options.map(({ text, value }, i) => Option({
      focused: position === i,
      identity: i,
      key: `_${value}${i}`,
      onClick: this.onOptionClick,
      onMouseEnter: this.onOptionMouseEnter,
      selected: selected === i,
      styles: styles.option,
      value,
    }, text));
  }
}

Select.defaultProps = {
  styles: {},
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  styles: PropTypes.object,
  value: PropTypes.string,
};

module.exports = reactOutsideEvent(cssModules(Select), ['click']);
module.exports.Select = createTag(module.exports);
