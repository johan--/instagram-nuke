'use strict';

const { V1: Client } = require('instagram-private-api');
const {store, timer, handleError} = require('../utils');

const get = () => {
    let username = store.get('credentials', 'username');
    let password = store.get('credentials', 'password');

    const device = new Client.Device(username);
    const storage = new Client.CookieFileStorage(`${__dirname}/../../../cookies/${username}.json`);

    return Client.Session.create(device, storage, username, password)
        .then(store.setThen('raw', 'session'))
        .then(timer.log('getSession'))
        .catch(handleError('getSession', get));
}

module.exports = get;