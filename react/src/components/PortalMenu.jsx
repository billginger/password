import React from 'react';
import { injectIntl } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Icon, Modal } from 'antd';

const PortalMenu = ({ intl, location }) => {
	const i18n = intl.messages;
	const confirmLogout = () => {
		Modal.confirm({
			title: i18n.modalConfirmTitle,
			content: intl.formatMessage(
				{ id: 'modalConfirmBody' },
				{ action: i18n.userLogout, target: '' }
			),
			onOk() {
				window.location.href = '/logout';
			}
		});
	};
	return (
		<Menu id="tc-portal-menu" theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
			<Menu.Item key="/">
				<Link to="/">{i18n.dashboard}</Link>
			</Menu.Item>
			<Menu.Item key="/password">
				<Link to="/password">{i18n.passwordManagement}</Link>
			</Menu.Item>
			<Menu.SubMenu title={i18n.systemManagement}>
				<Menu.Item key="/system/user">
					<Link to="/system/user">{i18n.systemUser}</Link>
				</Menu.Item>
				<Menu.Item key="/system/setting">
					<Link to="/system/setting">{i18n.systemSetting}</Link>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.SubMenu title={<Icon type="user" />}>
				<Menu.Item onClick={confirmLogout}>
					{i18n.userLogout}
				</Menu.Item>
			</Menu.SubMenu>
		</Menu>
	);
};

export default injectIntl(withRouter(PortalMenu));
