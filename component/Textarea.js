'use strict';

const { Component, PropTypes } = require('react');
const { noop, omit, prop } = require('../lib/dash');
const { themes } = require('../lib/tool');
const React = require('react');
const cc = require('classnames');

const cssModules = {
  m: require('../style/textarea/textarea-m.css'),
  s: require('../style/textarea/textarea-s.css'),
};

const omitProps = omit([
  'size',
  'styles',
]);

class Textarea extends Component {
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

  focus() {
    if (!this._textarea) return;
    this._textarea.focus();
  }

  select() {
    if (!this._textarea) return;
    this._textarea.select();
  }

  token = prop('size')

  render() {
    const {
      className,
      ...other,
    } = this.props;
    const { control } = this.state.styles;

    return (
      <textarea
        {...omitProps(other)}
        className={cc(control, className)}
        ref={r => this._textarea = r}/>
    );
  }
}

Textarea.defaultProps = {
  onChange: noop,
  size: 's',
  styles: cssModules,
  rows: 3,
};

Textarea.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    'm',
    's',
  ]),
  styles: PropTypes.object,
};

module.exports = Textarea;
