'use strict';

const { Check } = require('./check');
const { Component, PropTypes } = require('react');
const { createTag, div } = require('../');
const { bind, noop } = require('../tools/func');
const cssModules = require('react-css-modules');

class CheckGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.value || this.props.defaultValue,
    };

    bind(this, 'onChange');
  }

  onChange(e) {
    this.props.onChange(e);
  }

  render() {
    return div({styleName: 'container'}, this.renderOptions());
  }

  renderOptions() {
    const { defaultValue, name, options, styles, ...o } = this.props; // eslint-disable-line no-unused-vars
    const { selected } = this.state;

    return options.map(({ text, value }, i) => Check({
      ...o,
      checked: value === selected,
      key: `_${value}${i}`,
      name,
      onChange: this.onChange,
      styles: styles.option,
      value,
    }, text));
  }
}

CheckGroup.defaultProps = {
  onChange: noop,
  styles: {},
};

CheckGroup.propTypes = {
  onChange: PropTypes.func,
  styles: PropTypes.object,
};

module.exports = cssModules(CheckGroup);
module.exports.CheckGroup = createTag(module.exports);
