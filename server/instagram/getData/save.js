'use strict';

const { V1: Client } = require('instagram-private-api');
const jsonfile = require('jsonfile-promised');
const {store, timer} = require('../utils');

const path = `${__dirname}/../../../data`;
// const path = `${__dirname}/../../site/src/assets/data`;

const getNow = () => (new Date()).toISOString().replace(/[^0-9]/gi, '-');

module.exports = () => {
    let username = store.get('credentials', 'username');
    const genTitle = () => `${path}/${username}.json`;
    return jsonfile.writeFile(genTitle(), store.get('composed'), {spaces: 2})
        .then(timer.log('Saved'))
}
