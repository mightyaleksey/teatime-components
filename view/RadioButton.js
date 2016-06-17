'use strict';

const { Component, PropTypes } = require('react');
const { bind, composition, noop } = require('../tools/func');
const { generateId } = require('../tools/identity');
const React = require('react');

class RadioButton extends Component {
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
    this.props.onChange(e, {checked, value}, this.props.tc);
  }

  render() {
    const { children, label, styles, ...o } = this.props;
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
      <span className={composition(this.props)}>
        <input
          type='radio'
          {...o}
          className={styles.native}
          id={id}
          onChange={this.onChange}/>
        <label className={styles.control} htmlFor={id}>{label || children}</label>
      </span>
    );
  }
}

RadioButton.defaultProps = {
  onChange: noop,
  styleName: 'wrapper',
  styles: {},
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  styleName: PropTypes.string,
  styles: PropTypes.object,
  tc: PropTypes.any,
};

module.exports = RadioButton;
