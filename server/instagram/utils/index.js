'use strict';

const Store = require('./Store');
const Timer = require('./Timer');
const wait = require('./wait');
const handleError = require('./handleError');

module.exports = {
    store: new Store(),
    timer: new Timer(),
    wait,
    handleError
};