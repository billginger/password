import React from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter.jsx';

const App = () => (
	<div>
		<AppRouter />
	</div>
);

render(<App />, document.getElementById('root'));
