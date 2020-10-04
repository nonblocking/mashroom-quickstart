
import path from 'path';
import express from 'express';

import type {Request, Response} from 'express';
import type {ExpressRequest} from '@mashroom/mashroom/type-definitions';
import type {MashroomSecurityService} from '@mashroom/mashroom-security/type-definitions';

const app = express();

app.use('/assets', express.static(path.join(__dirname, '../public')));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req: Request, res: Response) => {
    const mrReq = req as ExpressRequest;
    const securityService: MashroomSecurityService = mrReq.pluginContext && mrReq.pluginContext.services.security && mrReq.pluginContext.services.security.service;
    const user = securityService && securityService.getUser(mrReq);

    res.render('index', {
        baseUrl: mrReq.baseUrl,
        sessionId: mrReq.session.id,
        userName: user && user.displayName,
    });
});

app.get('/subpage', (req: Request, res: Response) => {
    res.render('subpage', {
        baseUrl: req.baseUrl,
    });
});

export default app;
