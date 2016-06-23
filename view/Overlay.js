'use strict';

const { Component, PropTypes } = require('react');
const { forget, observe, update } = require('../tool/layer');
const { generateId } = require('../tool/identity');
const { noop } = require('../tool/func');
const React = require('react');

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: generateId(),
    };
  }

  componentDidUpdate() {
    update(this, this.state.id);
  }

  componentDidMount() {
    observe(this, this.state.id);
    update();
  }

  componentWillUnmount() {
    forget(this, this.state.id);
  }

  render() {
    return (
      <div {...this.props} ref='overlay'/>
    );
  }
}

Overlay.defaultProps = {
  onUpdate: noop,
};

Overlay.propTypes = {
  onUpdate: PropTypes.func,
};

module.exports = Overlay;
