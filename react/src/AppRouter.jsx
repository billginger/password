import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login.jsx';

const Portal = () => (
	<div>Portal</div>
);

const AppRouter = () => (
	<Router>
		<div>
			<Route path="/" exact component={Portal} />
			<Route path="/login" component={Login} />
		</div>
	</Router>
);

export default AppRouter;
