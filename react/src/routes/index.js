const routesMap = {
	'/': { i18n: 'dashboard', component: 'Dashboard' },
	'/login': '',
	'/password': { i18n: 'passwordManagement', component: 'Password' },
	'/system': { i18n: 'systemManagement', to: '/system/user' },
	'/system/user': { i18n: 'systemUser', component: 'User' },
	'/system/setting': { i18n: 'systemSetting', component: 'Building' }
};

let portalRoutes = [];
for (let key in routesMap) {
	portalRoutes.push(key);
}

module.exports = { routesMap, portalRoutes };
