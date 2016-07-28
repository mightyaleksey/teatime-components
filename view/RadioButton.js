'use strict';

const { PropTypes } = require('react');
const { bind } = require('../tool/component');
const { generateId } = require('../tool/identity');
const { noop } = require('../tool/func');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');

class RadioButton extends TeatimeComponent {
  constructor(props) {
    super(props);

    bind(this, 'onChange');

    this.state = {
      id: this.props.id || generateId(),
    };
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
    const { children, label, ...o } = this.knownProps();
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
      <span className={this.style('wrapper')}>
        <input
          type='radio'
          {...o}
          className={this.style('native')}
          id={id}
          onChange={this.onChange}/>
        <label className={this.style('control')} htmlFor={id}>{label || children}</label>
      </span>
    );
  }
}

RadioButton.defaultProps = {
  onChange: noop,
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    wrapper: PropTypes.string,
  }),
  tc: PropTypes.any,
};

RadioButton.unwantedProps = [
  'tc',
  ...TeatimeComponent.unwantedProps,
];

module.exports = RadioButton;
