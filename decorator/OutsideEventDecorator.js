'use strict';

const { PropTypes } = require('react');
const { bind } = require('../tool/component');
const React = require('react');
const TeatimeComponent = require('../view/TeatimeComponent');

/**
 * @param  {component} Target
 * @param  {string[]}  possibleEvents
 * @return {component}
 */
module.exports = function createOutsideEventDecorator(Target, possibleEvents = ['click']) {
  class OutsideEventDecorator extends TeatimeComponent {
    constructor(props) {
      super(props);

      bind(this, 'handleEvent');
    }

    componentDidMount() {
      possibleEvents.forEach(eventName =>
        window.addEventListener(eventName, this.handleEvent));
    }

    componentWillUnmount() {
      possibleEvents.forEach(eventName =>
        window.removeEventListener(eventName, this.handleEvent));
    }

    /**
     * Possibility to specify the parent node to check the relation between it and event target.
     *
     * @return {node|void}
     */
    getParentNode() {
      return this.props.getParentNode();
    }

    /**
     * @param  {object} e
     * @param  {node}   e.target
     * @return {void}
     */
    handleEvent(e) {
      const domNode = this.getParentNode();
      if (!domNode) return;

      const isInside = domNode.contains(e.target) || domNode === e.target;

      if (!isInside) {
        this.onOutsideEvent(e);
      }
    }

    /**
     * @param  {object} e
     * @return {void}
     */
    onOutsideEvent(e) {
      this.props.onOutsideEvent(e);
    }

    render() {
      return (
        <Target {...this.knownProps()} ref='target'/>
      );
    }
  }

  OutsideEventDecorator.propTypes = {
    getParentNode: PropTypes.func.isRequired,
    onOutsideEvent: PropTypes.func.isRequired,
  };

  OutsideEventDecorator.unwantedProps = [
    'getParentNode',
    'onOutsideEvent',
  ];

  return OutsideEventDecorator;
};
