'use strict';

const { V1: Client } = require('instagram-private-api');
const Promise = require('bluebird');
const {store, timer, handleError} = require('../utils');

const get = (username, i, len) =>
    Client.Relationship.get(
        store.get('raw', 'session'),
        store.get('raw', 'users', username, 'id')
    )
        .then(store.setThen('raw', 'relationships', username))
        .then(timer.log('getRelationships', 'single', `(${i + 1}/${len})`, username))
        .catch(handleError(`getRelationships (${username})`, () => get(username, i, len)))

module.exports = () =>
    Promise.map(Object.keys(store.get('raw', 'users')), get, {concurrency: 20})
        .then(timer.log('getRelationships', 'all'))