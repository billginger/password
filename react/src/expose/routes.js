const routesMap = {
	'/': 'dashboard',
	'/login': '',
	'/password': 'passwordManagement',
	'/system': 'systemManagement',
	'/system/user': 'systemUser',
	'/system/setting': 'systemSetting'
};

let portalRoutes = [];
for (let key in routesMap) {
	portalRoutes.push(key);
}

module.exports = { routesMap, portalRoutes };
