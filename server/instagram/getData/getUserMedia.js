'use strict';

const { V1: Client } = require('instagram-private-api');
const Promise = require('bluebird');

const {store, timer, handleError} = require('../utils');

const get = (username, i, len) =>
    new Client.Feed.UserMedia(
        store.get('raw', 'session'),
        store.get('raw', 'users', username, 'id'),
        5
    )
        .get()
        .then(store.setThen('raw', 'media', username))
        .then(timer.log('getUserMedia', 'single', `(${i + 1}/${len})`, username))
        .catch(handleError(`getUserMedia (${username})`, () => get(username, i, len)))

module.exports = () =>
    Promise.map(Object.keys(store.get('raw', 'users')), get, {concurrency: 20})
        .then(timer.log('getUserMedia', 'all'))