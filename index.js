global.dir = __dirname;

const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const { port } = require('./libs/cfg.js');
const { log, resLog } = require('./libs/log.js');
const router = require('./routes');

require('./libs/db.js');

const app = new Koa();
app.use(resLog);
app.use(static(path.join(global.dir, 'static')));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(port);

log.info(`LazyPass is starting at port ${port}`);
