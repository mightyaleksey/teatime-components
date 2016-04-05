export default ({ styles = {}, ...o }) => (
  <button { ...o } className={ styles.control }/>
);
