const User = require('../models/user.js');
const { getPassword, getToken } = require('../libs/crypto.js');
const { handleWarn, handleError } = require('../libs/handle.js');
const { log } = require('../libs/log.js');

exports.userLogin = async (ctx) => {
	const name = ctx.request.body.un && ctx.request.body.un.trim();
	const pw = ctx.request.body.pw && ctx.request.body.pw.trim();
	const password = getPassword(pw);
	const token = getToken();
	const conditions = { name, password, isDel: false };
	const update = { token };
	try {
		const user = await User.findOneAndUpdate(conditions, update);
		if (!user) {
			const warnNoFound = `User login failed. No user info found. Input name: ${name}`;
			return handleWarn(ctx, 'msgLoginFailed', warnNoFound);
		}
		if (user.isLocked) {
			const warnLocked = `User login failed. The user is locked. Input name: ${name}`;
			return handleWarn(ctx, 'msgUserLocked', warnLocked);
		}
		ctx.status = 200;
		ctx.cookies.set('uid', user._id);
		ctx.cookies.set('token', token);
		log.info(`User login succeeded. User id: ${user._id}, name: ${name}`);
	} catch (err) {
		handleError(ctx, err);
	}
};

exports.userLogout = ctx => {
	ctx.cookies.set('uid', '', { maxAge: 0 });
	ctx.cookies.set('token', '', { maxAge: 0 });
	ctx.redirect('/login');
};
