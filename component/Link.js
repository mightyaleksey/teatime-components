'use strict';

const { Component, PropTypes } = require('react');
const { omit } = require('../lib/dash');
const { themes } = require('../lib/tool');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  'action-l': require('../style/link/link-action-l.css'),
  'action-m': require('../style/link/link-action-m.css'),
  'action-s': require('../style/link/link-action-s.css'),
  'action-xs': require('../style/link/link-action-xs.css'),
  'link-l': require('../style/link/link-l.css'),
  'link-m': require('../style/link/link-m.css'),
  'link-s': require('../style/link/link-s.css'),
  'link-xs': require('../style/link/link-xs.css'),
  'normal-l': require('../style/link/link-normal-l.css'),
  'normal-m': require('../style/link/link-normal-m.css'),
  'normal-s': require('../style/link/link-normal-s.css'),
  'normal-xs': require('../style/link/link-normal-xs.css'),
};

const omitProps = omit([
  'size',
  'styles',
  'theme',
]);

class Link extends Component {
  constructor(props) {
    super(props);

    this._styles = themes(this.token);

    this.state = {
      styles: this._styles(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      styles: this._styles(nextProps),
    });
  }

  // token :: object -> string
  token({ size, theme }) {
    return `${theme}-${size}`;
  }

  render() {
    const {
      className,
      ...other,
    } = this.props;
    const { control } = this.state.styles;

    return (
      <a
        {...omitProps(other)}
        className={cc(control, className)}/>
    );
  }
}

Link.defaultProps = {
  size: 's',
  styles: cssModules,
  theme: 'link',
};

Link.propTypes = {
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
    'xs',
  ]),
  styles: PropTypes.object,
  theme: PropTypes.oneOf([
    'action',
    'link',
    'normal',
  ]),
};

module.exports = Link;
