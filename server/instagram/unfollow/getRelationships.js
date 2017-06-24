'use strict';

const { V1: Client } = require('instagram-private-api');
const Promise = require('bluebird');
const {store, timer, handleError} = require('../utils');

let get = () => {
    let accounts = store.get('raw', 'unfollow', 'usernames')
        .map(username => store.get('raw', 'users', username, 'id'))

    return Client.Relationship.getMany(store.get('raw', 'session'), accounts)
        .then(store.setThen('raw', 'unfollow', 'relationships'))
        .then(timer.log('getRelationships'))
        .catch(handleError('getRelationships', () => get()))
}

module.exports = get;