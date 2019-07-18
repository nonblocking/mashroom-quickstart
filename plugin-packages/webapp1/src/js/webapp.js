// @flow

import path from 'path';
import express from 'express';

import type {$Request as Request, $Response as Response} from 'express';
import type {MashroomSecurityService} from '@mashroom/mashroom-security/type-definitions';

const app = express();

app.use('/assets', express.static(path.join(__dirname, '../public')));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req: Request, res: Response) => {
    const securityService: MashroomSecurityService = req.pluginContext && req.pluginContext.services.security && req.pluginContext.services.security.service;
    const user = securityService && securityService.getUser(req);

    res.render('index', {
        baseUrl: req.baseUrl,
        sessionId: req.session.id,
        userName: user && user.displayName,
    });
});

app.get('/subpage', (req: Request, res: Response) => {
    res.render('subpage', {
        baseUrl: req.baseUrl,
    });
});

export default app;
