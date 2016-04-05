export default ({ styles = {}, href = '', ...o }) => (
  <a { ...o } className={ styles.control } href={ href }/>
);
