const fs = require('fs');
const path = require('path');

module.exports = ctx => {
	if (ctx.url != '/login') {
		if (!ctx.cookies.get('uid')) {
			return ctx.redirect('/login');
		}
	}
	ctx.type = 'html';
	ctx.body = fs.readFileSync(path.join(global.dir, 'views', 'index.html'));
};
