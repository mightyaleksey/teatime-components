'use strict';
/* eslint-disable max-len */
const {noop} = require('./dash');

var warn = noop;

if (process.env.NODE_ENV !== 'production') {
  const MESSAGE = {
    defaultValue: '%s contains an input of type `%s` with both `value` and `defaultValue` props. Input elements must by either controlled or uncontrolled (specify either the `value` prop, or the `defaultValue` prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://facebook.github.io/react/docs/forms.html#controlled-components',
  };

  const existingCodes = serializeMsgCodes(MESSAGE);
  const shownWarnings = {};

  // http://staxmanade.com/2016/01/developer-friendly-react-component-errors/
  // https://github.com/facebook/react/issues/2461
  warn = function warn(condition, msgCode, ...args) {
    if (typeof msgCode === 'undefined') {
      throw new Error('`warn(condition, msgCode, ...args)` requires a warning message code');
    }

    if (!MESSAGE[msgCode]) {
      // prevent duplicated warnings.
      // presumably wont work with hot reload.
      if (shownWarnings[msgCode]) return;
      shownWarnings[msgCode] = true;

      const errMsg = `Unknown \`msgCode\` was provided. Consider adding message text for \`${msgCode}\` or use the existing one: ${existingCodes}.`;
      return void console.error('Error: ' + errMsg);
    }

    if (condition) {
      // prevent duplicated warnings.
      // presumably wont work with hot reload.
      const shownWarningsKey = args.join(':');
      if (shownWarnings[shownWarningsKey]) return;
      shownWarnings[shownWarningsKey] = true;

      const rawmsg = MESSAGE[msgCode];

      var argIndex = 0;
      const message = 'Warning: ' + rawmsg.replace(/%s/g, () => args[argIndex++]);

      console.error(message); // eslint-disable-line no-console
    }
  };

  // serializeMsgCodes :: object -> string
  function serializeMsgCodes(messages) {
    return Object.keys(messages)
      .map(msgCode => `\`${msgCode}\``).join(', ');
  }
}

module.exports = warn;
