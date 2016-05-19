'use strict';

const demoRenderPath = require.resolve('./demo-render');

module.exports = function demoLoader() {
  this.cacheable();

  const data = Array.isArray(this.inputValue) ? this.inputValue[0] : this.inputValue;
  const componentPath = require.resolve(`../component/${data.name}`);
  const str = JSON.stringify(data, null, 2);

  this.addDependency(demoRenderPath);
  this.addDependency(componentPath);

  return [
    `'use strict';`,
    ``,
    `const render = require('${demoRenderPath}');`,
    `module.exports = render(${str}, require('${componentPath}'));`,
  ].join('\n');
};
