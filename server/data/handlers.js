'use strict';

const getData = require('../instagram/getData');
const unfollow = require('../instagram/unfollow');

const getFromSave = require('./getFromSave');

const fromScrape = (req, res) =>
    () =>
        getData(req.query.username, req.query.password)
            .then(data => res.status(200).send(data))


module.exports = app => {
    app.get('/data/get', (req, res) => {
        if (req.query.refresh === 'true') {
            fromScrape(req, res)();
        } else {
            getFromSave(req.query.username)
                .then(data => res.status(200).send(data))
                .catch(fromScrape(req, res));
        }
    });

    app.post('/data/unfollow', (req, res) => {
        unfollow(req.query.username, req.query.password, req.body);
        res.status(200).send({});
    });
}