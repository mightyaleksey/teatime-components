import React from 'react';

const Button = ({ styles = {}, ...o }) => (
  <button { ...o } className={ styles.control }/>
);

Button.propTypes = {
  styles: React.PropTypes.object,
};

export default Button;
