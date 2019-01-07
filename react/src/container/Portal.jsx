import React from 'react';
import { injectIntl } from 'react-intl';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Portal extends React.Component {
	render() {
		const i18n = this.props.intl.messages;
		return (
			<Layout>
				<Header>
					<h1 id="tc-layout-title">Lazy<b>Pass</b></h1>
					<Menu id="tc-layout-menu" theme="dark" mode="horizontal">
						<Menu.Item key="1">nav 1</Menu.Item>
						<Menu.Item key="2">nav 2</Menu.Item>
						<Menu.Item key="3">nav 3</Menu.Item>
					</Menu>
				</Header>
				<Content id="tc-layout-content">
					<Breadcrumb className="tc-layout-breadcrumb">
						<Breadcrumb.Item>{i18n.dashboard}</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
				</Content>
				<Footer id="tc-layout-footer">
					LazyPass © 2019 Created by Bill
				</Footer>
			</Layout>
		);
	}
}

export default injectIntl(Portal);
