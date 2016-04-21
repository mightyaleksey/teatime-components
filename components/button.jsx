import React, { createElement } from 'react';
import h from 'hyperscript-helpers';

const { button } = h(createElement);

const Button = ({ styles = {}, ...o }) => button({
  ...o,
  className: styles.control,
});

Button.defaultProps = {
  styles: {},
};
Button.propTypes = {
  styles: React.PropTypes.object,
};

export default Button;
