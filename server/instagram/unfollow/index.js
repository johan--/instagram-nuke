'use strict';

const { V1: Client } = require('instagram-private-api');
const {store, timer} = require('../utils');

const getAccount = require('../shared/getAccount');
const getSession = require('../shared/getSession');
const getFollowing = require('../shared/getFollowing');
// const getRelationships = require('./getRelationships');
const destroyRelationships = require('./destroyRelationships');


module.exports = (username, password, usernames) => {
    timer.reset();
    store.reset();
    store.set('credentials', 'username', username);
    store.set('credentials', 'password', password);
    store.set('raw', 'unfollow', 'usernames', usernames);
    return getSession()
        .then(getAccount)
        .then(getFollowing)
        // .then(getRelationships)
        .then(destroyRelationships)
        .catch((e) => console.log('Uncaught Error:', e));
}

