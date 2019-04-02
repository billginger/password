const Router = require('koa-router');
const { portalRoutes } = require('../react/src/expose/routes.js');
const portalPage = require('../controllers/portal.js');
const { userLogin, userLogout } = require('../controllers/user.js');

const router = new Router();
router.get(portalRoutes, portalPage);
router.post('/login', userLogin);
router.get('/logout', userLogout);

module.exports = router;
