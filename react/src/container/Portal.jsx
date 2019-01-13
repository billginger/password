import React from 'react';
import { injectIntl } from 'react-intl';
import { Layout, Menu, Breadcrumb, Dropdown, Icon } from 'antd';
import Language from '../common/Language.jsx';
const { Header, Content, Footer } = Layout;

const Portal = ({ intl }) => {
	const i18n = intl.messages;
	const menu = (
		<Menu>
			<Menu.Item>
				{i18n.userLogout}
			</Menu.Item>
		</Menu>
	);
	return (
		<Layout>
			<Header>
				<h1 id="tc-portal-title">Lazy<b>Pass</b></h1>
				<Dropdown overlay={menu}>
					<Icon id="tc-portal-user" type="user" />
				</Dropdown>
				<Language id="tc-portal-language" />
				<Menu id="tc-portal-menu" theme="dark" mode="horizontal">
					<Menu.Item key="1">{i18n.dashboard}</Menu.Item>
					<Menu.Item key="2">{i18n.passwordManagement}</Menu.Item>
					<Menu.Item key="3">{i18n.systemManagement}</Menu.Item>
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
