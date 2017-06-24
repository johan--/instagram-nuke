'use strict';
const Promise = require('bluebird');
const Timer = require('./Timer');
const wait = require('./wait');

const timer = new Timer();
const delay = 60000;

module.exports = (title, retry = (a => a)) => e => {
    return new Promise((resolve, reject) => {
        if (e.name === 'RequestsLimitError') {
            timer.error(title, 'RequestsLimitError - Waiting', delay)();
            setTimeout(resolve, delay);
        } else {
            timer.error(title, 'Unknown Error - Retrying')();
            timer.error('Error:', e);
            resolve();
        }
    })
    .then(wait(1000))
    .then(retry);
}