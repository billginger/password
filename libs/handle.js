const { log } = require('./log.js');

const handleSuccess = (ctx, info) => {
	ctx.status = 200;
	log.info(`[success]`, info, `[${ctx.request.ip}]`);
};

const handleFail = (ctx, warn, msg) => {
	ctx.status = 400;
	ctx.message = msg;
	log.warn(`[fail]`, warn, `[${ctx.request.ip}]`);
};

const handleError = (ctx, err) => {
	ctx.status = 500;
	log.error(err);
};

module.exports = { handleSuccess, handleFail, handleError };
