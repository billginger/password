import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portal from './container/Portal.jsx';
import Login from './container/Login.jsx';
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
