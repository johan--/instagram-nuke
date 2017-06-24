'use strict';

const { V1: Client } = require('instagram-private-api');
const Promise = require('bluebird');

const {store, timer, wait, handleError} = require('../utils');

const get = (username, i, len) =>
    store.get('raw', 'users', username)
        .update()
        .then(timer.log('getUpdatedUsers', 'single', `(${i + 1}/${len})`, username))
        .then(wait(250))
        .catch(handleError(`getUpdatedUsers (${username})`, () => get(username, i, len)))

module.exports = () =>
    Promise.map(Object.keys(store.get('raw', 'users')), get, {concurrency: 20})
        .then(timer.log('getUpdatedUsers', 'all'))