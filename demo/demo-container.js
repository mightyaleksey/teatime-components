'use strict';

const React = require('react');
const { PropTypes } = React;
const styles = require('./demo-container.css');

function DemoContainer({ Component, data, layout = 'row', title }) {
  const content = data.map((line, i) => {
    const components = line.reduce((set, props, j) => set.concat(<Component key={`_${i}${j}`} {...props}/>, ' '), []);
    return (<div className={styles[layout]} key={`_${title}${i}`}>{components}</div>);
  });

  const anchor = title.toLowerCase();

  return (
    <div>
      <h1 className={styles.header}>
        <a className='anchor' name={anchor}/>
        {title}
        <a className={styles.hashLink} href={`#${anchor}`}>#</a>
      </h1>
      {content}
    </div>
  );
}

DemoContainer.defaultProps = {};

DemoContainer.propTypes = {
  Component: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

module.exports = DemoContainer;
