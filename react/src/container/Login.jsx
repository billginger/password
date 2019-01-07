import React from 'react';
import { injectIntl } from 'react-intl';
import { Card, Form, Input, Icon, Checkbox, Button, Alert } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errMsg: '',
			buttonLoading: false
		}
	}
	render() {
		const i18n = this.props.intl.messages;
		const { getFieldDecorator, validateFieldsAndScroll } = this.props.form;
		const { errMsg, buttonLoading } = this.state;
		const alertMessage = errMsg && (i18n[errMsg] || i18n.msgError);
		const handleSubmit = e => {
			e.preventDefault();
			validateFieldsAndScroll((err, values) => {
				if (err) return;
				this.setState({
					buttonLoading: true
				});
				fetch('/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(values)
				}).then(res => (
					res.ok ? this.props.history.push('/') : Promise.reject(res)
				)).catch(err => {
					this.setState({
						errMsg: err.statusText,
						buttonLoading: false
					});
				});
			});
		}
		const handleInputChange = () => {
			this.setState({
				errMsg: ''
			});
		}
		const loginAlert = (
			alertMessage && <Alert message={alertMessage} type='error' className="tc-login-alert" />
		);
		return (
			<Card id="tc-login" title={i18n.loginTitle}>
				<Form onSubmit={handleSubmit}>
					<FormItem>
						{getFieldDecorator('un', {
							rules: [{ required: true, message: i18n.msgNeedInput }]
						})(
							<Input
								prefix={<Icon type="user" className="tc-login-icon" />}
								placeholder={i18n.loginUsername}
								onChange={handleInputChange}
							/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('pw', {
							rules: [{ required: true, message: i18n.msgNeedInput }]
						})(
							<Input
								prefix={<Icon type="lock" className="tc-login-icon" />}
								placeholder={i18n.loginPassword}
								type="password"
								onChange={handleInputChange}
							/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('rm', {
							valuePropName: 'checked'
						})(
							<Checkbox onChange={handleInputChange}>{i18n.loginRememberMe}</Checkbox>
						)}
						<a id="tc-login-forgot">{i18n.loginForgotPassword}</a>
						{loginAlert}
						<Button type="primary" htmlType="submit" block loading={buttonLoading}>
							{i18n.loginButton}
						</Button>
					</FormItem>
				</Form>
			</Card>
		);
	}
}

export default injectIntl(Form.create()(Login));
