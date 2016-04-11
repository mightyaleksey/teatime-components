export default ({ styles = {}, ...o }) => (
  <textarea { ...o } className={ styles.control }/>
);
