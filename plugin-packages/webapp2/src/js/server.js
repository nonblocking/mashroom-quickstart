// @flow
/* eslint no-console: off */

/* Standalone server */

import express from 'express';
var session = require('express-session');
import app from './webapp';

const server = express();
server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

server.use('/', app);

server.listen(8082, () => {
    console.log('Listening on 8082');
});

