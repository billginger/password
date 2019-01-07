const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();

router.get(['/', '/login'], ctx => {
	ctx.type = 'html';
	ctx.body = fs.readFileSync(path.join(global.dir, 'views', 'index.html'));
});

router.post('/login', ctx => {
	if (ctx.request.body.un == 'admin' && ctx.request.body.pw == 'admin') {
		ctx.status = 200;
	} else {
		ctx.status = 400;
		ctx.message = 'msgLoginFailed';
		ctx.body = 'details';
	}
});

module.exports = router;
