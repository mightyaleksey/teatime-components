'use strict';

const { PropTypes } = require('react');
const { bind } = require('../tool/component');
const { generateId } = require('../tool/identity');
const { noop } = require('../tool/func');
const React = require('react');
const Teatime = require('./Teatime');

class Check extends Teatime {
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
    const { children, label, ...o } = this.props;
    const { id } = this.state;

    const content = label || children;
    const labelElement = content
      ? (<label className={this.style('label')} htmlFor={id}>{content}</label>)
      : null;

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
          {...o}
          className={this.style('native')}
          id={id}
          onChange={this.onChange}/>
        <label className={this.style('control')} htmlFor={id}/>
        {labelElement}
      </div>
    );
  }
}

Check.defaultProps = {
  onChange: noop,
  type: 'checkbox',
};

Check.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  styles: PropTypes.shape({
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    wrapper: PropTypes.string,
  }),
  tc: PropTypes.any,
  type:  PropTypes.oneOf([
    'checkbox',
    'radio',
  ]),
};

module.exports = Check;
