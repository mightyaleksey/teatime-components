import { h, React } from '../h';

const { createTag, textarea } = h;
const textareaHelper = createTag(Textarea);

Textarea.defaultProps = {
  styles: {},
};

Textarea.propTypes = {
  name: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
};

export { Textarea as default, textareaHelper as textarea };

function Textarea({ styles, ...o }) {
  return textarea({...o, className: styles.control});
}
