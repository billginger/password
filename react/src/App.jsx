import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import { intl } from './AppIntl.jsx';
import AppRouter from './AppRouter.jsx';

const App = () => (
	<IntlProvider locale={intl.locale} messages={intl.messages}>
		<AppRouter />
	</IntlProvider>
);

render(<App />, document.getElementById('root'));
