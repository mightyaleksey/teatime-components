import React, { createElement } from 'react';
import h from 'hyperscript-helpers';

const { a } = h(createElement);

const Link = ({ styles = {}, href = '', ...o }) => a({
  ...o,
  className: styles.control,
  href,
});

Link.defaultProps = {
  styles: {},
};
Link.propTypes = {
  styles: React.PropTypes.object,
};

export default Link;
