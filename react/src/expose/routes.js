const map = {
	'/': 'dashboard',
	'/login': '',
	'/password': 'passwordManagement',
	'/system': 'systemManagement',
	'/system/user': 'systemUser',
	'/system/setting': 'systemSetting'
};

let portalRoutes = [];
for (let key in map) {
	portalRoutes.push(key);
}

module.exports = { map, portalRoutes };
