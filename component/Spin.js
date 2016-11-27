'use strict';

const {Component, PropTypes} = require('react');
const {omit, prop} = require('../lib/dash');
const {themes} = require('../lib/tool');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  l: require('../style/spin/spin-l.css'),
  m: require('../style/spin/spin-m.css'),
  s: require('../style/spin/spin-s.css'),
  xl: require('../style/spin/spin-xl.css'),
  xs: require('../style/spin/spin-xs.css'),
};

const omitProps = omit([
  'size',
  'styles',
]);

class Spin extends Component {
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

  token = prop('size')

  render() {
    const {
      className,
      ...other,
    } = this.props;
    const {control} = this.state.styles;

    return (
      <span
        {...omitProps(other)}
        className={cc(control, className)}/>
    );
  }
}

Spin.defaultProps = {
  size: 's',
  styles: cssModules,
};

Spin.propTypes = {
  size: PropTypes.oneOf([
    'l',
    'm',
    's',
    'xl',
    'xs',
  ]),
  styles: PropTypes.object,
};

module.exports = Spin;
