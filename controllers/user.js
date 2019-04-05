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
		const user = await User.findOneAndUpdate({ name, password, isDeleted: false }, { token });
		if (!user) return handleFail(ctx, `[login] [name:${un}] [no found]`, 'msgLoginFailed');
		if (user.isLocked) return handleFail(ctx, `[login] [name:${user.name}] [locked]`, 'msgUserLocked');
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
			const user = await User.findOne({ _id, token, isDeleted: false });
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
		const user = await User.findOne({ _id, token, isDeleted: false });
		if (!user) return handleFail(ctx, `[session] [id:${_id}] [no found]`, 'msgLoginExpired');
		if (user.isLocked) return handleFail(ctx, `[session] [name:${user.name}] [locked]`, 'msgUserLocked');
	} catch (err) {
		return handleError(ctx, err);
	}
	await next();
};

exports.userList = async (ctx) => {
	try {
		const users = await User.find({ isDeleted: false }, '-password -token -isDeleted').sort('-_id');
		if (!users) return handleFail(ctx, `[user] [list] [no found]`, 'msgNotFound');
		handleSuccess(ctx, `[user] [list]`, users);
	} catch (err) {
		handleError(ctx, err);
	}
};
