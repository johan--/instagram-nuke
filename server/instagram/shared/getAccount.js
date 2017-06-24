'use strict';

const { V1: Client } = require('instagram-private-api');
const {store, timer, handleError} = require('../utils');

const get = () =>
    store.get('raw', 'session').getAccount()
        .then(store.setThen('raw', 'account'))
        .then(timer.log('getAccount'))
        .catch(handleError('getAccount', get));

module.exports = get;