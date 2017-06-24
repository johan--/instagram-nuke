'use strict';
const Promise = require('bluebird');

module.exports = delay => () => new Promise(resolve => setTimeout(resolve, delay));