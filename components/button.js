import { h } from '../h';
import React from 'react';

const { createTag, button } = h;
const buttonHelper = createTag(Button);

Button.defaultProps = {
  styles: {},
};

Button.propTypes = {
  styles: React.PropTypes.object,
};

export { Button as default, buttonHelper as button };

function Button({ styles, ...o }) {
  return button({...o, className: styles.control});
}
