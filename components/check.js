import { h, React } from '../h';
import { generateId } from '../identity';

const { createTag, input, label, span } = h;
const checkHelper = createTag(Check);

Check.defaultProps = {
  id: generateId(),
  styles: {},
};

Check.propTypes = {
  name: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
};

export { Check as default, checkHelper as check };

function Check({ children, id, name, styles, ...o }) {
  return span({className: styles.container},
    input({className: styles.native, id, name, type: 'checkbox'}),
    label({className: styles.control, htmlFor: id})
  );
}
