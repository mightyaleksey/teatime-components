export default ({ styles = {}, ...o }) => (
  <input { ...o } className={ styles.control } type='text'/>
);
