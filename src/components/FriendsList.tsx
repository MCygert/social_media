import React from 'react';
import styled from 'styled-components';
import { Friend } from './DashBoard';

export type FriendListProperties = {
	friend: Friend;
};

const FriendName = styled.h1`
	color: #537fa5;
`;

const FriendsList = ({ friend }: FriendListProperties) => {
	return <FriendName>{friend.firstName + ' ' + friend.lastName}</FriendName>;
};

export default FriendsList;
