'use strict';

const React = require('react');
const { render } = require('react-dom');
const DemoContainer = require('./demo-container');

module.exports = function demoRender(data, comp) {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  render(React.createElement(DemoContainer, {
    Component: comp,
    data: data.data,
    title: data.name,
  }), container);
};
