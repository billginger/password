import React from 'react';
import { injectIntl } from 'react-intl';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { routesMap } from '../expose/routes.js';

const PortalBreadcrumb = ({ intl, location }) => {
	const i18n = intl.messages;
	const pathSnippets = location.pathname.split('/').slice(1);
	const breadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		return (
			<Breadcrumb.Item key={url}>
				<Link to={url}>
					{i18n[routesMap[url]]}
				</Link>
			</Breadcrumb.Item>
		);
	});
	return (
		<Breadcrumb className="tc-portal-breadcrumb">
			{breadcrumbItems}
		</Breadcrumb>
	);
};

export default injectIntl(withRouter(PortalBreadcrumb));
