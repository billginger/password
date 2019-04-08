import React from 'react';
import { injectIntl } from 'react-intl';
import { Typography, Icon, Button, Table } from 'antd';
const { Text } = Typography;

const withTimeZone = label => (
	label + ' GMT+' + -(new Date().getTimezoneOffset() / 60)
);

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
			for (let item of data) {
				item.groupName = item.group.map(value => (
					value
				));
			}
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
		// Table Columns
		const getLocalDate = date => {
			date = new Date(date);
			if (date == 'Invalid Date') {
				return '-';
			}
			return new Date(date - date.getTimezoneOffset() * 60000).toJSON().slice(0, 19).replace('T', ' ');
		};
		const columns = [{
			title: i18n.labelName,
			dataIndex: 'name'
		}, {
			title: i18n.systemUserFullName,
			dataIndex: 'fullname',
			render: text => text || '-'
		}, {
			title: i18n.systemUserEmail,
			dataIndex: 'email',
			render: text => text || '-'
		}, {
			title: i18n.systemUserGroup,
			dataIndex: 'groupName',
			render: text => text.join(', ') || '-'
		},  {
			title: withTimeZone(i18n.labelCreatedAt),
			dataIndex: 'createdAt',
			sorter: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
			render: text => getLocalDate(text)
		}, {
			title: withTimeZone(i18n.labelUpdatedAt),
			dataIndex: 'updatedAt',
			sorter: (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
			render: text => getLocalDate(text)
		}];
		// Render Page
		console.log(JSON.stringify(data));
		return (
			<div>
				<div>
					<Button>{i18n.actionAdd}</Button>
				</div>
				<Table id="tc-portal-list-table" rowKey="_id" bordered={true} columns={columns} dataSource={data}/>
			</div>
		);
	}
}

export default injectIntl(User);
