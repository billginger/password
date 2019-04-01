const Router = require('koa-router');
const renderPage = require('../controllers/render.js');
const { userLogin, userLogout } = require('../controllers/user.js');

const router = new Router();
router.get(['/', '/login', '/password'], renderPage);
router.post('/login', userLogin);
router.get('/logout', userLogout);

module.exports = router;
