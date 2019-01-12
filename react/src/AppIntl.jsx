import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { intl } from './i18n';
import AppRouter from './AppRouter.jsx';

const AppIntl = ({ i18n }) => (
	<IntlProvider locale={i18n.locale} messages={i18n.messages}>
		<AppRouter />
	</IntlProvider>
);

const mapStateToProps = state => ({
	i18n: intl[state.language]
});

export default connect(mapStateToProps)(AppIntl);
