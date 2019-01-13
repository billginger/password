const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();

router.get(['/', '/login'], ctx => {
	if (ctx.url != '/login') {
		if (!ctx.cookies.get('userName')) {
			return ctx.redirect('/login');
		}
	}
	ctx.type = 'html';
	ctx.body = fs.readFileSync(path.join(global.dir, 'views', 'index.html'));
});

router.post('/login', ctx => {
	if (ctx.request.body.un == 'admin' && ctx.request.body.pw == 'admin') {
		ctx.status = 200;
		ctx.cookies.set('userName', 'admin');
	} else {
		ctx.status = 400;
		ctx.message = 'msgLoginFailed';
		ctx.body = 'details';
	}
});

router.get('/logout', ctx => {
	ctx.cookies.set('userName', '', { maxAge: 0 });
	ctx.redirect('/login');
});

module.exports = router;
