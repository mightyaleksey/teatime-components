import React, { createElement } from 'react';
import h from 'hyperscript-helpers';

const { input } = h(createElement);

const Input = ({ styles = {}, ...o }) => input({
  ...o,
  className: styles.control,
  type: 'text',
});

Input.defaultProps = {
  styles: {},
};
Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
};

export default Input;
