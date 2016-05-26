'use strict';

const Popup = require('./Popup');

class Tooltip extends Popup {
  render() {
    if (!this.props.children) {
      return null;
    }

    return super.render();
  }
}

module.exports = Tooltip;
