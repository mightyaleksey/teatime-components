'use strict';

const React = require('react');
const { PropTypes } = React;
const cssModules = require('react-css-modules');
const styles = require('./demo-container.css');

function DemoContainer({ Component, data, title }) {
  const content = data.map((line, i) => {
    const components = line.reduce((set, props, j) => set.concat(<Component key={`_${i}${j}`} {...props}/>, ' '), []);
    return (<div key={`_${title}${i}`} styleName='row'>{components}</div>);
  });

  const anchor = title.toLowerCase();

  return (
    <div>
      <h1 styleName='header'>
        <a className='anchor' name={anchor}/>
        {title}
        <a styleName='hashLink' href={`#${anchor}`}>#</a>
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

module.exports = cssModules(DemoContainer, styles);
