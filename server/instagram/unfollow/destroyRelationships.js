'use strict';

const { V1: Client } = require('instagram-private-api');
const Promise = require('bluebird');
const {store, timer, wait, handleError} = require('../utils');

// const waitLength = 10;

let each = (username, i, len) => {
    let account = store.get('raw', 'users', username);

    if (!account) {
        return Promise.resolve()
            .then(timer.log('unfollow', `(${i + 1}/${len})`, username, '(not following)'))
    }

    return Client.Relationship.destroy(store.get('raw', 'session'), account.id)
        .then(timer.log('unfollow', `(${i + 1}/${len})`, username))
        // .then(wait(waitLength * 1000))
        .catch(handleError(`unfollow ${username}`, () => each(account.id, i, len)));
}

let run = () =>
    Promise.mapSeries(
        store.get('raw', 'unfollow', 'usernames'),
        each
    )
        .then(timer.log('unfollow all'))
        .catch(handleError('unfollow all', run));

module.exports = run;