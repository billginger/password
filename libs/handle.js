const { log } = require('./log.js');

const handleSuccess = (ctx, logMsg, data) => {
	ctx.status = 200;
	ctx.body = data;
	log.info(`[success]`, logMsg, `[${ctx.request.ip}]`);
};

const handleFail = (ctx, logMsg, errMsg) => {
	ctx.status = 400;
	ctx.message = errMsg;
	log.warn(`[fail]`, logMsg, `[${ctx.request.ip}]`);
};

const handleError = (ctx, err) => {
	ctx.status = 500;
	log.error(err);
};

module.exports = { handleSuccess, handleFail, handleError };
