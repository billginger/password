import React from 'react';
import { injectIntl } from 'react-intl';
import { Layout, Breadcrumb } from 'antd';
import MenuLanguage from '../common/MenuLanguage.jsx';
import PortalMenu from './PortalMenu.jsx';
const { Header, Content, Footer } = Layout;

const Portal = ({ intl, location }) => {
	const i18n = intl.messages;
	return (
		<Layout>
			<Header>
				<h1 id="tc-portal-title">Lazy<b>Pass</b></h1>
				<MenuLanguage id="tc-portal-language" />
				<PortalMenu location={location} />
			</Header>
			<Content id="tc-portal-content">
				<Breadcrumb className="tc-portal-breadcrumb">
					<Breadcrumb.Item>{i18n.dashboard}</Breadcrumb.Item>
				</Breadcrumb>
				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
			</Content>
			<Footer id="tc-portal-footer">
				LazyPass © 2019 Created by Bill
			</Footer>
		</Layout>
	);
};

export default injectIntl(Portal);
