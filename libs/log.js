const log4js = require('log4js');

const log = log4js.getLogger();
log.level = 'debug';
const resLog = async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	const bytes = ctx.response.header['content-length'] || 0;
	log.info(`${ctx.method} ${ctx.url} ${ctx.status} ${bytes}bytes ${ms}ms`);
};

module.exports = { log, resLog };
