
import path from 'path';
import express from 'express';

import type {Request, Response} from 'express';
import type {MashroomSecurityService} from '@mashroom/mashroom-security/type-definitions';

const app = express();

app.use('/assets', express.static(path.join(__dirname, '../public')));

// IMPORTANT: We have to explicitly set the engine here,
//   because the express module in the root node_modules would not find it here
 
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req: Request, res: Response) => {
    const securityService: MashroomSecurityService = req.pluginContext?.services.security?.service;
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
