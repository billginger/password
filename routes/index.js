const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();

router.get(['/', '/login'], ctx => {
	ctx.type = 'html';
	ctx.body = fs.readFileSync(path.join(global.dir, 'views', 'index.html'));
});

router.post('/login', ctx => {
	ctx.status = 401;
	ctx.message = 'Custom error message';
});

module.exports = router;
