import React from 'react';

const Link = ({ styles = {}, href = '', ...o }) => (
  <a { ...o } className={ styles.control } href={ href }/>
);

Link.propTypes = {
  styles: React.PropTypes.object,
};

export default Link;
