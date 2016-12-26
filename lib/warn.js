'use strict';
/* eslint-disable max-len */
const {noop} = require('./dash');

var warn = noop;

if (process.env.NODE_ENV !== 'production') {
  const MESSAGE = {};
  const existingCodes = Object.keys(MESSAGE).map(msgCode => `\`${msgCode}\``).join(', ');

  // http://staxmanade.com/2016/01/developer-friendly-react-component-errors/
  // https://github.com/facebook/react/issues/2461
  warn = function warn(condition, msgCode, ...args) {
    if (typeof msgCode === 'undefined') {
      throw new Error('`warn(condition, msgCode, ...args)` requires a warning message code');
    }

    if (!MESSAGE[msgCode]) {
      throw new Error(`Unknown \`msgCode\` was provided. Consider adding message text for \`${msgCode}\` or use the existing one: ${existingCodes}.`);
    }

    // condition passed
    if (condition) return;

    const rawmsg = MESSAGE[msgCode];

    var argIndex = 0;
    const message = 'Warning: ' + rawmsg.replace(/%s/g, () => args[argIndex++]);

    console.error(message); // eslint-disable-line no-console
  };
}

module.exports = warn;
