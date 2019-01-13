import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { setLanguage } from '../store';
import { i18n } from '../i18n';

let menuItem = [];
for (let key in i18n) {
	menuItem.push(<Menu.Item key={key}>{i18n[key].name}</Menu.Item>);
}

const PortalLanguage = ({ id, lang, setLang }) => {
	const menu = (
		<Menu selectedKeys={[lang]} onClick={e => {setLang(e.key)}}>
			{menuItem}
		</Menu>
	);
	return (
		<Dropdown overlay={menu}>
			<Icon id={id} type="global" />
		</Dropdown>
	);
}

const mapStateToProps = state => ({
	lang: state.language
});

const mapDispatchToProps = dispatch => ({
	setLang: payload => dispatch(setLanguage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortalLanguage);
