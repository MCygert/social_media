import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type ProtectedRouteProps = {
	Component: any;
	user: any;
	path: string;
};

const ProtectedRoute = ({ Component, user, path }: ProtectedRouteProps) => {
	return (
		<Route
			path={path}
			render={(props) => {
				if (user !== null) {
					return <Component {...props} {...user} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/unauthorized',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default ProtectedRoute;
