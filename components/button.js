import { h, PropTypes } from '../h';

const { createTag, button } = h;
const buttonHelper = createTag(Button);

Button.defaultProps = {
  styles: {},
};

Button.propTypes = {
  styles: PropTypes.object,
};

export { Button as default, buttonHelper as button };

function Button({ styles, ...o }) {
  return button({...o, className: styles.control});
}
