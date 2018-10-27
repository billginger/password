import React from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';

const App = () => (
	<div>
		<Button type="primary">Button</Button>
	</div>
);

render(<App />, document.getElementById('root'));
