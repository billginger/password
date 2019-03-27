global.dir = __dirname;

const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const config = require('./config.js');
const { log, resLog } = require('./libs/log.js');
const router = require('./routes');

const env = process.env.NODE_ENV || 'local';
const cfg = config[env];
const normalizePort = val => (parseInt(val));
const port = normalizePort(process.env.PORT || cfg.port || 3000);

const app = new Koa();
app.use(resLog);
app.use(static(path.join(global.dir, 'static')));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(port);

log.info(`LazyPass is starting at port ${port}`);
