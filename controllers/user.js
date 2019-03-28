const User = require('../models/user.js');
const getToken = require('../libs/token.js');
const { handleError, handleWarn } = require('../libs/handle.js');

exports.userLogin = async (ctx) => {
	const name = ctx.request.body.un && ctx.request.body.un.trim();
	const pw = ctx.request.body.pw && ctx.request.body.pw.trim();
	const password = pw;
	const token = getToken();
	const conditions = { name, password, isDel: false };
	const update = { token };
	try {
		const user = await User.findOneAndUpdate(conditions, update);
		if (!user) {
			const warn = `Login failed. No user info found. Input name: ${name}`;
			return handleWarn(ctx, 'msgLoginFailed', warn);
		}
	} catch (err) {
		return handleError(ctx, err);
	}
	ctx.status = 200;
	ctx.cookies.set('uid', doc._id);
};

exports.userLogout = ctx => {
	ctx.cookies.set('uid', '', { maxAge: 0 });
	ctx.redirect('/login');
};
