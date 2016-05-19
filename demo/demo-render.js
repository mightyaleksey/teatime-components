'use strict';

const { render } = require('react-dom');
const demoContainer = require('./demo-container');

module.exports = function demoRender(data, comp) {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  render(demoContainer({
    component: comp[data.hyper],
    data: data.data,
    title: data.name,
  }), container);
};
