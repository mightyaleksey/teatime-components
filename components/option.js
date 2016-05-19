import { h, PropTypes } from '../h';

const { createTag, span } = h;
const optionHelper = createTag(Option);

export { Option as default, optionHelper as option };

function Option({ checked, selected, styles, ...o }) {
  var className = styles.control;

  if (checked && !selected) {
    className = styles.controlIsFocused;
  }

  if (!checked && selected) {
    className = styles.controlIsSelected;
  }

  if (checked && selected) {
    className = styles.controlIsFocusedAndIsSelected;
  }

  return span({...o, className});
}
