import { h, PropTypes } from '../h';
import { generateId } from '../identity';

const { createTag, input, label, span } = h;
const checkHelper = createTag(Check);

Check.defaultProps = {
  styles: {},
};

Check.propTypes = {
  name: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export { Check as default, checkHelper as check };

function Check({ children, id = generateId(), name, styles, ...o }) {
  return span({className: styles.container, htmlFor: id},
    input({...o, className: styles.native, id, name, type: 'checkbox'}),
    label({className: styles.control, htmlFor: id}),
    children
  );
}
