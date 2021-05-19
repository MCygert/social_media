import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
	const NavContainer = styled.div`
		background-color: #5199ff;
		height: 80px;
		display: flex;
		justify-content: flex-start;
		margin-bottom: 16px;
		align-items: center;
	`;
	const SiteTitle = styled.h1`
		color: white;
		font-weight: bold;
		font-size: 30px;
		margin-left: 9px;
	`;
	return (
		<NavContainer>
			<SiteTitle>Mikolaj site</SiteTitle>
		</NavContainer>
	);
};
