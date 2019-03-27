import React from 'react';
import { injectIntl } from 'react-intl';
import { Menu, Dropdown, Icon, Modal } from 'antd';

const PortalMenuUser = ({ intl }) => {
	const i18n = intl.messages;
	const showLogoutConfirm = () => {
		Modal.confirm({
			title: i18n.modalConfirmTitle,
			content: intl.formatMessage(
				{ id: 'modalConfirmBody' },
				{ action: i18n.userLogout, target: '' }
			),
			onOk() {
				location.href = '/logout';
			}
		});
	};
	const menu = (
		<Menu>
			<Menu.Item onClick={showLogoutConfirm}>
				{i18n.userLogout}
			</Menu.Item>
		</Menu>
	);
	return (
		<Dropdown overlay={menu}>
			<Icon id="tc-portal-user" type="user" />
		</Dropdown>
	);
};

export default injectIntl(PortalMenuUser);
