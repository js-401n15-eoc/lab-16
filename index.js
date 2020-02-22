'use strict';

const events = require('./events.js');
require('./logger.js');

events.emit('save', 'The quick brown fox jumped over the lazy dogs.');
