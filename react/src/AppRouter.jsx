import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Portal = () => (
	<div>Portal</div>
);

const Login = () => (
	<div>Login</div>
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
