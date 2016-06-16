'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const { generateId } = require('../tools/identity');
const React = require('react');
const cx = require('classnames');

class Tumbler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id || generateId(),
    };

    bind(this, 'onChange');
  }

  componentWillReceiveProps({ id }) {
    if (id) {
      this.setState({id});
    }
  }

  onChange(e) {
    const { checked, value } = e.target;
    this.props.onChange(e, {checked, value});
  }

  render() {
    const { className, off, on, styleName, styles, ...o } = this.props;
    const { id } = this.state;

    /**
     * Still there is an issue about controlled and uncontrolled components,
     * related to the input[type="checkbox"] and input[type="radio"].
     * It results in the way controlled components are determined.
     *
     * @see https://github.com/facebook/react/blob/v15.1.0/src/renderers/dom/client/wrappers/ReactDOMInput.js#L171
     * @see https://github.com/facebook/react/issues/6779
     */

    return (
      <div className={cx(className, styles[styleName])}>
        <input
          type='checkbox'
          {...o}
          className={styles.native}
          id={id}
          onChange={this.onChange}/>
        <label className={styles.control} htmlFor={id}>
          <span className={styles.label}>{on}</span>
          <span className={styles.label}>{off}</span>
          <span className={styles.delimiter}>&nbsp;</span>
        </label>
      </div>
    );
  }
}

Tumbler.defaultProps = {
  off: 'Off',
  on: 'On',
  onChange: noop,
  styleName: 'wrapper',
  styles: {},
};

Tumbler.propTypes = {
  name: PropTypes.string.isRequired,
  off: PropTypes.string,
  on: PropTypes.string,
  onChange: PropTypes.func,
  styleName: PropTypes.string,
  styles: PropTypes.object,
};

module.exports = Tumbler;
