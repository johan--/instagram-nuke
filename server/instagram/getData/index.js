'use strict';

const { V1: Client } = require('instagram-private-api');
const {store, timer} = require('../utils');

const getAccount = require('../shared/getAccount');
const getSession = require('../shared/getSession');
const getFollowing = require('../shared/getFollowing');
const getUpdatedUsers = require('./getUpdatedUsers');
const getUserMedia = require('./getUserMedia');
const getRelationships = require('./getRelationships');
const compose = require('./compose');
const save = require('./save');


module.exports = (username, password) => {
    timer.reset();
    store.reset();
    store.set('credentials', 'username', username);
    store.set('credentials', 'password', password);

    return getSession()
        .then(getAccount)
        .then(getFollowing)
        // .then(getUpdatedUsers)
        .then(getUserMedia)
        .then(getRelationships)
        .then(compose)
        .then(save)
        .then(() => store.get('composed'))
        .catch((e) => console.log('Uncaught Error:', e));
}

