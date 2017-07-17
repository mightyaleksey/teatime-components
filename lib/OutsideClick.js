import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

type Props = {
  onOutsideClick: Function,
};

module.exports = OutsideClick;

function OutsideClick(Target) {
  class OutsideClickDecorator extends Component {
    constructor(props: Props) {
      super(props);

      this._onClick = this._onClick.bind(this);
      this._saveRef = this._saveRef.bind(this);
    }

    componentDidMount() {
      window.addEventListener('click', this._onClick);
    }

    componentWillUnmount() {
      window.removeEventListener('click', this._onClick);
    }

    _onClick(e: SyntheticEvent) {
      const parentNode = findDOMNode(this._targetElement);
      const targetNode = e.target;

      if (parentNode) {
        const isInside = parentNode.contains(targetNode) || parentNode === targetNode;
        if (!isInside) this.props.onOutsideClick(e);
      }
    }

    _saveRef(ref) {
      this._targetElement = ref;
    }

    render() {
      return (
        <Target
          ref={this._saveRef}
          {...props}/>
      );
    }
  }

  return OutsideClickDecorator;
}
