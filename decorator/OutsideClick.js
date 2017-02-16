'use strict';

const {Component, PropTypes} = require('react');
const {findDOMNode} = require('react-dom');
const {omit} = require('../lib/dash');
const React = require('react');

const omitProps = omit([
  'onOutsideClick',
  'parentNode',
]);

module.exports = OutsideClick;

// OutsideClick :: Component -> Component
function OutsideClick(Target) {
  class Outside extends Component {
    constructor(props) {
      super(props);

      if (props.parentNode) this._parentNode = props.parentNode;

      if (!props.onOutsideClick)
        throw new Error('Should provide `onOutsideClick` prop');
    }

    componentDidMount() {
      window.addEventListener('click', this._handleEvent);
    }

    componentWillUnmount() {
      window.removeEventListener('click', this._handleEvent);
    }

    _handleEvent = e => {
      const {target} = e;
      const parentNode = this._parentNode();

      if (!parentNode) return;

      const isInside = parentNode.contains(target) || parentNode === target;

      if (isInside) return;

      this.props.onOutsideClick(e);
    }

    _parentNode = () => findDOMNode(this.refs.parent)

    render() {
      return (
        <Target ref='parent' {...omitProps(this.props)}/>
      );
    }
  }

  Outside.propTypes = {
    onOutsideClick: PropTypes.func,
    parentNode: PropTypes.func,
  };

  return Outside;
}
