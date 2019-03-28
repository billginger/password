const { log } = require('./log.js');

const handleError = (ctx, err) => {
	ctx.status = 500;
	ctx.message = 'msgError';
	ctx.body = err;
	log.error(err);
};

const handleWarn = (ctx, msg, warn) => {
	ctx.status = 400;
	ctx.message = msg;
	ctx.body = warn;
	log.warn(warn);
};

module.exports = { handleError, handleWarn };
