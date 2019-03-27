import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Icon } from 'antd';
import { setLanguage } from '../store';
import { i18n } from '../i18n';
import { setStorage } from '../utils/browser.js';

let menuItem = [];
for (let key in i18n) {
	menuItem.push(<Menu.Item key={key}>{i18n[key].name}</Menu.Item>);
}

const MenuLanguage = ({ id, lang, setLang }) => {
	const changeLanguage = e => {
		setStorage('userLanguage', e.key);
		setLang(e.key);
	};
	const menu = (
		<Menu selectedKeys={[lang]} onClick={changeLanguage}>
			{menuItem}
		</Menu>
	);
	return (
		<Dropdown overlay={menu}>
			<Icon id={id} type="global" />
		</Dropdown>
	);
};

const mapStateToProps = state => ({
	lang: state.language
});

const mapDispatchToProps = dispatch => ({
	setLang: payload => dispatch(setLanguage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuLanguage);
