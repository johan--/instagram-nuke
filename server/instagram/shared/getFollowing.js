'use strict';

const { V1: Client } = require('instagram-private-api');
const {store, timer, handleError} = require('../utils');

const get = () =>
    new Client.Feed.AccountFollowing(
        store.get('raw', 'session'),
        store.get('raw', 'account', 'id')
    )
        .get()
            .then(store.setThen('following'))
            .then(following => following
                .filter((u) => u)
                // .slice(0, 10)
                .forEach((user) =>
                    store.set('raw', 'users', user.getParams().username, user)))
            .then(timer.log('getFollowing'))
            .catch(handleError('getFollowing', get));

module.exports = get;