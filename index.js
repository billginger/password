global.dir = __dirname;

const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const log4js = require('log4js');
const config = require('./config.js');
const router = require('./routes');

const log = log4js.getLogger();
log.level = 'debug';
const resLog = async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	const bytes = ctx.response.header['content-length'] || 0;
	log.info(`${ctx.method} ${ctx.url} ${ctx.status} ${bytes}bytes ${ms}ms`);
}

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
