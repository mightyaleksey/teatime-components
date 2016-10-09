'use strict';

const { configure } = require('@kadira/storybook');

configure(loadStories, module);

function loadStories() {
  require('../stories');
}
