import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import AppRouter from './AppRouter.jsx';

const App = () => (
	<IntlProvider>
		<AppRouter />
	</IntlProvider>
);

render(<App />, document.getElementById('root'));
