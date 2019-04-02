import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import LanguageMenu from '../common/LanguageMenu.jsx';
import PortalMenu from './PortalMenu.jsx';
import PortalBreadcrumb from './PortalBreadcrumb.jsx';
import PortalDashboard from './PortalDashboard.jsx';
import PortalPassword from './PortalPassword.jsx';
import PortalBuilding from './PortalBuilding.jsx';
const { Header, Content, Footer } = Layout;

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
				<Route exact path="/" component={PortalDashboard} />
				<Route path="/password" component={PortalPassword} />
				<Route component={PortalBuilding} />
			</Switch>
		</Content>
		<Footer id="tc-portal-footer">
			LazyPass © 2019 Created by Bill
		</Footer>
	</Layout>
);

export default Portal;
