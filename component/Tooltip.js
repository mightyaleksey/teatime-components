'use strict';

const {Component, PropTypes} = require('react');
const {findDOMNode} = require('react-dom');
const {genericId} = require('../lib/identity');
const {getStyleProp} = require('../lib/dom');
const {noop, prop} = require('../lib/dash');
const {themes} = require('../lib/tool');
const Overlay = require('../view/Overlay');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  'normal-s': require('../style/tooltip/tooltip-normal-s.css'),
};

const getZIndex = getStyleProp('z-index');
// const omitProps = omit([]);

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this._styles = themes(this.token);

    this.state = {
      _identity: genericId(),
      styles: this._styles(props),
    };
  }

  componentDidMount() {
    const elem = findDOMNode(this._layer);
    console.log(getZIndex(elem));
  }

  componentWillUnmount() {}

  // token :: object -> string
  token({size, theme}) {
    return `${theme}-${size}`;
  }

  _onOutsideClick = noop

  render() {
    const {
      className,
      direction,
      ...other,
    } = this.props;

    const {styles = {}} = this.state;

    return (
      <Overlay
        {...other}
        className={cc(styles[direction], className)}
        onOutsideClick={this._onOutsideClick}
        ref={r => this._layer = r}/>
    );
  }
}

Tooltip.defaultProps = {
  direction: 'right',
  theme: 'normal',
  size: 's',
  styles: cssModules,
};

Tooltip.propTypes = {
  direction: PropTypes.oneOf([
    'bottom',
    'left',
    'right',
    'top',
  ]),
  size: PropTypes.oneOf([
    'xs',
    's',
    'm',
  ]),
  styles: PropTypes.object,
  theme: PropTypes.oneOf([
    'normal',
    'success',
    'warning',
  ]),
};

module.exports = Tooltip;
