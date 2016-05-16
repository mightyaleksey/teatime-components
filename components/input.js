import { h, PropTypes } from '../h';

const { createTag, input } = h;
const inputHelper = createTag(Input);

Input.defaultProps = {
  styles: {},
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export { Input as default, inputHelper as input };

function Input({ styles, ...o }) {
  return input({...o, className: styles.control});
}
