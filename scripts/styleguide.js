'use strict';

function action(eventName) {
  return dispatch;

  function dispatch(...args) {
    console.log(eventName, args);
  }
}

global.action = action;
