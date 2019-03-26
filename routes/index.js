const Router = require('koa-router');
const render = require('../controllers/render');
const { userLogin, userLogout } = require('../controllers/user');

const router = new Router();
router.get(['/', '/login'], render);
router.post('/login', userLogin);
router.get('/logout', userLogout);

module.exports = router;
