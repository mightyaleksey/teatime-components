import React, { createElement } from 'react';
import h from 'hyperscript-helpers';

const { textarea } = h(createElement);

const Textarea = ({ styles = {}, ...o }) => textarea({
  ...o,
  className: styles.control,
});

Textarea.defaultProps = {
  styles: {},
};
Textarea.propTypes = {
  name: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
};

export default Textarea;
