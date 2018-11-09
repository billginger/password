import React from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter.jsx';
import './less/style.less';

const App = () => (
	<div>
		<AppRouter />
	</div>
);

render(<App />, document.getElementById('root'));
