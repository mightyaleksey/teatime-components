import React from 'react';

const Input = ({ styles = {}, ...o }) => (
  <input { ...o } className={ styles.control } type='text'/>
);

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Input;
