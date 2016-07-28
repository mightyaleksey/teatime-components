'use strict';

const { PropTypes } = require('react');
const Textarea = require('../view/Textarea');

const predefinedStyles = {
  s: require('../style/textarea/textarea-s.css'),
  m: require('../style/textarea/textarea-m.css'),
};

class TextareaComponent extends Textarea {
  /**
   * @return {object}
   */
  styles() {
    return predefinedStyles[this.props.size];
  }
}

TextareaComponent.defaultProps = {
  size: 's',
  ...Textarea.defaultProps,
};

TextareaComponent.propTypes = {
  size: PropTypes.oneOf([
    's',
    'm',
  ]),
  ...Textarea.propTypes,
};

TextareaComponent.unwantedProps = [
  'size',
];

module.exports = TextareaComponent;
