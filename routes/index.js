const Router = require('koa-router');
const { portalRoutes } = require('../react/src/routes/index.js');
const portalPage = require('../controllers/portal.js');
const { userLogin, userLogout, checkSession, userList } = require('../controllers/user.js');

const api = new Router();
api.use(checkSession);
api.get('/user/list', userList);

const router = new Router();
router.get(portalRoutes, portalPage);
router.post('/login', userLogin);
router.get('/logout', userLogout);
router.use('/api', api.routes(), api.allowedMethods());

module.exports = router;
