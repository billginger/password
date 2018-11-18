import React from 'react';
import { Card, Form, Input, Icon, Checkbox, Button, Alert } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			alertMessage: '',
			alertType: '',
			buttonLoading: false
		}
	}
	render() {
		const { getFieldDecorator, validateFieldsAndScroll } = this.props.form;
		const { alertMessage, alertType, buttonLoading } = this.state;
		const handleSubmit = e => {
			e.preventDefault();
			validateFieldsAndScroll((err, values) => {
				if (err) return;
				this.setState({
					alertMessage: 'msgSubmitting',
					alertType: 'info',
					buttonLoading: true
				});
				fetch('/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(values)
				}).then(res => (
					res.ok ? res.json() : Promise.reject(res)
				)).then(data => {
					console.log(data);
				}).catch(err => {
					this.setState({
						alertMessage: err.statusText,
						alertType: 'error',
						buttonLoading: false
					});
				});
			});
		}
		const loginAlert = (
			alertType && <Alert message={alertMessage} type={alertType} />
		);
		return (
			<Card title="Log in to LazyPass" id="tc-login">
				<Form onSubmit={handleSubmit}>
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
						{loginAlert}
						<Button type="primary" htmlType="submit" block loading={buttonLoading}>
							Log in
						</Button>
					</FormItem>
				</Form>
			</Card>
		);
	}
}

export default Form.create()(Login);
