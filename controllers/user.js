const User = require('../models/user.js');
const { getPassword, getToken } = require('../libs/crypto.js');
const { handleSuccess, handleFail, handleError } = require('../libs/handle.js');

exports.userLogin = async (ctx) => {
	const name = ctx.request.body.un && ctx.request.body.un.trim();
	const pw = ctx.request.body.pw && ctx.request.body.pw.trim();
	const password = getPassword(pw);
	const token = getToken();
	try {
		const user = await User.findOneAndUpdate({ name, password, isDel: false }, { token });
		if (!user) return handleFail(ctx, `[login] [no found] [name:${name}]`, 'msgLoginFailed');
		if (user.isLocked) return handleFail(ctx, `[login] [locked] [name:${name}]`, 'msgUserLocked');
		ctx.cookies.set('uid', user._id);
		ctx.cookies.set('token', token);
		handleSuccess(ctx, `[login] [id:${user._id}] [name:${user.name}]`);
	} catch (err) {
		handleError(ctx, err);
	}
};

exports.userLogout = async (ctx) => {
	const _id = ctx.cookies.get('uid');
	const token = ctx.cookies.get('token');
	try {
		const user = await User.findOne({ _id, token, isDel: false });
		if (user) {
			handleSuccess(ctx, `[logout] [id:${user._id}] [name:${user.name}]`);
		}
	} catch (err) {
		handleError(ctx, err);
	}
	ctx.cookies.set('uid', '', { maxAge: 0 });
	ctx.cookies.set('token', '', { maxAge: 0 });
	ctx.redirect('/login');
};
