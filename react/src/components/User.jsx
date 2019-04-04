import React from 'react';
import { injectIntl } from 'react-intl';
import { Typography, Icon } from 'antd';
const { Text } = Typography;

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errMsg: '',
			data: ''
		}
	}
	componentDidMount() {
		fetch('/api/user/list', {
			credentials: 'same-origin'
		}).then(res => (
			res.ok ? res.json() : Promise.reject(res)
		)).then(data => {
			this.setState({
				data
			});
		}).catch(err => {
			const errMsg = err.statusText || err;
			this.setState({
				errMsg
			});
		});
	}
	render() {
		const { intl } = this.props;
		const i18n = intl.messages;
		const { errMsg, data } = this.state;
		// Handle Error
		if (errMsg) {
			const warnMessage = i18n[errMsg] || i18n.msgError;
			return (
				<Text type="warning">{warnMessage}</Text>
			);
		}
		// Loading
		if (!data) {
			return (
				<Icon type="loading" />
			);
		}
		// Other
		return (
			<div>
				{JSON.stringify(this.state.data)}
			</div>
		);
	}
}

export default injectIntl(User);
