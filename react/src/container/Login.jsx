import React from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div id="tc-login">
				<Form className="tc-login-form">
					<FormItem>
						{getFieldDecorator('un', {
							rules: [{ required: true, message: 'Please input your username!' }]
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('pw', {
							rules: [{ required: true, message: 'Please input your password!' }]
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
						<a className="tc-login-form-forgot">Forgot password</a>
						<Button type="primary" htmlType="submit" className="tc-login-form-button">
							Log in
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}

export default Form.create()(Login);
