import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { intl, language } from './i18n';
import AppRouter from './AppRouter.jsx';

const AppIntl = ({ reduxLanguage }) => {
	const lang = reduxLanguage || language;
	const i18n = intl[lang];
	return (
		<IntlProvider locale={i18n.locale} messages={i18n.messages}>
			<AppRouter />
		</IntlProvider>
	);
}

const mapStateToProps = state => ({
	reduxLanguage: state.language
});

export default connect(mapStateToProps)(AppIntl);
