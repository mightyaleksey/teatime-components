import { h } from '../h';
import React from 'react';

const { createTag, input } = h;
const inputHelper = createTag(Input);

Input.defaultProps = {
  styles: {},
};

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
};

export { Input as default, inputHelper as input };

function Input({ styles, ...o }) {
  return input({...o, className: styles.control});
}
