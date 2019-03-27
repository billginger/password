import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portal from './components/Portal.jsx';
import Login from './components/Login.jsx';
import './less/style.less';

const AppRouter = () => (
	<Router>
		<div>
			<Route path="/" exact component={Portal} />
			<Route path="/login" component={Login} />
		</div>
	</Router>
);

export default AppRouter;
