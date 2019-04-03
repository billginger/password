import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import LanguageMenu from '../common/LanguageMenu.jsx';
import PortalMenu from './PortalMenu.jsx';
import PortalBreadcrumb from './PortalBreadcrumb.jsx';
import PortalDashboard from './PortalDashboard.jsx';
import PortalPassword from './PortalPassword.jsx';
import PortalBuilding from './PortalBuilding.jsx';
const { Header, Content, Footer } = Layout;

const portalSubpages = {
	'/': PortalDashboard,
	'/password': PortalPassword,
	'/system': '/system/user',
	'/system/user': PortalBuilding,
	'/system/setting': PortalBuilding
}

let portalRoutes = [];
for (let key in portalSubpages) {
	if (typeof portalSubpages[key] == 'string') {
		portalRoutes.push(
			<Redirect exact key={key} from={key} to={portalSubpages[key]} />
		);
	} else {
		portalRoutes.push(
			<Route exact key={key} path={key} component={portalSubpages[key]} />
		);
	}
}

const Portal = () => (
	<Layout>
		<Header>
			<h1 id="tc-portal-title">Lazy<b>Pass</b></h1>
			<LanguageMenu id="tc-portal-language" theme="dark" />
			<PortalMenu />
		</Header>
		<Content id="tc-portal-content">
			<PortalBreadcrumb />
			<Switch>
				{portalRoutes}
			</Switch>
		</Content>
		<Footer id="tc-portal-footer">
			LazyPass © 2019 Created by Bill
		</Footer>
	</Layout>
);

export default Portal;
