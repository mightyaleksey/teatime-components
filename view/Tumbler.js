'use strict';

const { PropTypes } = require('react');
const { bind } = require('../tool/component');
const { generateId } = require('../tool/identity');
const { noop } = require('../tool/func');
const React = require('react');
const TeatimeComponent = require('./TeatimeComponent');

class Tumbler extends TeatimeComponent {
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
    this.props.onChange(e, {checked, value});
  }

  render() {
    const { off, on, ...o } = this.knownProps();
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
      <div className={this.style('wrapper')}>
        <input
          type='checkbox'
          {...o}
          className={this.style('native')}
          id={id}
          onChange={this.onChange}/>
        <label className={this.style('control')} htmlFor={id}>
          <span className={this.style('label')}>{on}</span>
          <span className={this.style('label')}>{off}</span>
          <span className={this.style('delimiter')}>&nbsp;</span>
        </label>
      </div>
    );
  }
}

Tumbler.defaultProps = {
  off: 'Off',
  on: 'On',
  onChange: noop,
};

Tumbler.propTypes = {
  name: PropTypes.string.isRequired,
  off: PropTypes.string,
  on: PropTypes.string,
  onChange: PropTypes.func,
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
    delimiter: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    wrapper: PropTypes.string,
  }),
};

module.exports = Tumbler;
