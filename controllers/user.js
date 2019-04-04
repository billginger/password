const User = require('../models/user.js');
const { getPassword, getToken } = require('../libs/crypto.js');
const { handleSuccess, handleFail, handleError } = require('../libs/handle.js');

exports.userLogin = async (ctx) => {
	const un = ctx.request.body.un && ctx.request.body.un.trim();
	const pw = ctx.request.body.pw && ctx.request.body.pw.trim();
	const name = new RegExp(`^${un}$`, 'i');
	const password = getPassword(pw);
	const token = getToken();
	try {
		const user = await User.findOneAndUpdate({ name, password, isDel: false }, { token });
		if (!user) return handleFail(ctx, `[login] [no found] [name:${un}]`, 'msgLoginFailed');
		if (user.isLocked) return handleFail(ctx, `[login] [locked] [name:${user.name}]`, 'msgUserLocked');
		ctx.cookies.set('uid', user._id);
		ctx.cookies.set('token', token);
		handleSuccess(ctx, `[login] [id:${user._id}] [name:${user.name}]`, 'ok');
	} catch (err) {
		handleError(ctx, err);
	}
};

exports.userLogout = async (ctx) => {
	const _id = ctx.cookies.get('uid');
	const token = ctx.cookies.get('token');
	if (_id && token) {
		try {
			const user = await User.findOne({ _id, token, isDel: false });
			if (user) {
				handleSuccess(ctx, `[logout] [id:${user._id}] [name:${user.name}]`, 'ok');
			}
		} catch (err) {
			handleError(ctx, err);
		}
	}
	ctx.cookies.set('uid', '', { maxAge: 0 });
	ctx.cookies.set('token', '', { maxAge: 0 });
	ctx.redirect('/login');
};

exports.checkSession = async (ctx, next) => {
	const _id = ctx.cookies.get('uid');
	const token = ctx.cookies.get('token');
	if (!_id || !token) return handleFail(ctx, `[session] [no cookies]`, 'msgNeedLogin');
	try {
		const user = await User.findOne({ _id, token, isDel: false });
		if (!user) return handleFail(ctx, `[session] [no found] [id:${_id}]`, 'msgLoginExpired');
		if (user.isLocked) return handleFail(ctx, `[session] [locked] [name:${user.name}]`, 'msgUserLocked');
		next();
	} catch (err) {
		handleError(ctx, err);
	}
};

exports.userList = async (ctx) => {
	handleSuccess(ctx, `[user] [list] [id:xxx] [name:xxx]`, ['test']);
};
