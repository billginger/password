exports.userLogin = ctx => {
	if (ctx.request.body.un == 'admin' && ctx.request.body.pw == 'admin') {
		ctx.status = 200;
		ctx.cookies.set('uid', '001');
	} else {
		ctx.status = 400;
		ctx.message = 'msgLoginFailed';
		ctx.body = 'details';
	}
};

exports.userLogout = ctx => {
	ctx.cookies.set('uid', '', { maxAge: 0 });
	ctx.redirect('/login');
};
