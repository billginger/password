import React from 'react';
import { Card, Form, Input, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Card title="Log in to LazyPass" id="tc-login">
				<Form>
					<FormItem>
						{getFieldDecorator('un', {
							rules: [{ required: true, message: 'Please input your username!' }]
						})(
							<Input
								prefix={<Icon type="user" className="tc-login-icon" />}
								placeholder="Username"
							/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('pw', {
							rules: [{ required: true, message: 'Please input your password!' }]
						})(
							<Input
								prefix={<Icon type="lock" className="tc-login-icon" />}
								placeholder="Password"
								type="password"
							/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('rm', {
							valuePropName: 'checked'
						})(
							<Checkbox>Remember me</Checkbox>
						)}
						<a id="tc-login-forgot">Forgot password</a>
						<Button type="primary" htmlType="submit" block>Log in</Button>
					</FormItem>
				</Form>
			</Card>
		);
	}
}

export default Form.create()(Login);
