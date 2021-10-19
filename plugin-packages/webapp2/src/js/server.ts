/* eslint no-console: off */

/* Standalone server, will not be use if it runs in Mashroom */

import express from 'express';
import session from 'express-session';
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

