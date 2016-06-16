'use strict';

const { Component, PropTypes } = require('react');
const { bind, noop } = require('../tools/func');
const { generateId } = require('../tools/identity');
const React = require('react');
const cssModules = require('react-css-modules');

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
    const { children, className, styleName = 'wrapper', ...o } = this.props;
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
      <span className={className} styleName={styleName}>
        <input
          styleName='native'
          type='radio'
          {...o}
          id={id}
          onChange={this.onChange}/>
        <label htmlFor={id} styleName='control'>{children}</label>
      </span>
    );
  }
}

RadioButton.defaultProps = {
  onChange: noop,
  styles: {},
};

RadioButton.propTypes = {
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  styles: PropTypes.object,
  tc: PropTypes.any,
  value: PropTypes.string.isRequired,
};

module.exports = cssModules(RadioButton);
