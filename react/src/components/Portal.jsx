import React from 'react';
import { Layout } from 'antd';
import LanguageMenu from '../common/LanguageMenu.jsx';
import PortalMenu from './PortalMenu.jsx';
import PortalBreadcrumb from './PortalBreadcrumb.jsx';
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
			<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
		</Content>
		<Footer id="tc-portal-footer">
			LazyPass © 2019 Created by Bill
		</Footer>
	</Layout>
);

export default Portal;
