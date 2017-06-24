'use strict';

const fs = require('fs-extra');

const path = `${__dirname}/../../data`;

module.exports = (username) =>
    new Promise((resolve, reject) =>
        fs.pathExists(`${path}/${username}.json`)
            .then(exists =>
                (exists) ? resolve(require(`${path}/${username}.json`)) : reject()))