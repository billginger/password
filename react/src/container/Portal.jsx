import React from 'react';
import { injectIntl } from 'react-intl';
import { Layout, Menu, Breadcrumb } from 'antd';
import Language from '../common/Language.jsx';
const { Header, Content, Footer } = Layout;

const Portal = ({ intl }) => {
	const i18n = intl.messages;
	return (
		<Layout>
			<Header>
				<h1 id="tc-portal-title">Lazy<b>Pass</b></h1>
				<Language id="tc-portal-language" ghost="true" />
				<Menu id="tc-portal-menu" theme="dark" mode="horizontal">
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
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
}

export default injectIntl(Portal);
