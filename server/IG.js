'use strict';

const { V1: Client } = require('instagram-private-api');
const cred = require('../cred.json');

const device = new Client.Device(cred.username);
const storage = new Client.CookieFileStorage(`${__dirname}/../cookies/${cred.username}.json`);

Client.Session.create(device, storage, cred.username, cred.password)
    .then(session => ([session, session.getAccount()]))
    .spread((session, account) => ([
        session,
        session.getAccount(),
        new Client.Feed.AccountFollowing(session, account.id).get()
    ]))
    .spread((session, account, feed) => {
        console.log('feed', feed.length);
        console.log('example', feed[0]);
    })
    .catch(() => console.log('ERROR!!!'));