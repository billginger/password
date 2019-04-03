import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Password from './Password.jsx';
import User from './User.jsx';
import Building from './Building.jsx';
import { routesMap } from '../routes/index.js';

const subpages = {
	Dashboard,
	Password,
	User,
	Building
}

let routes = [];
for (let key in routesMap) {
	if (routesMap[key].component) {
		routes.push(
			<Route exact key={key} path={key} component={subpages[routesMap[key].component]} />
		);
	}
	if (routesMap[key].to) {
		routes.push(
			<Redirect exact key={key} from={key} to={routesMap[key].to} />
		);
	}
}

const PortalRoutes = () => (
	<div id="tc-portal-main">
		<Switch>
			{routes}
		</Switch>
	</div>
);

export default PortalRoutes;
