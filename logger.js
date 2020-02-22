'use strict';

const events = require('./events.js');

events.on('save', payload => logger('save', payload));
events.on('error', payload => logger('error', payload));

const logger = (event, payload) => {
  let time = new Date();
  const res = { event, time, payload };
  console.log('Here is the event and payload:', res);
  return res;
}

module.exports = logger;