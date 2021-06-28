import React from 'react';
import styled from 'styled-components';
import FriendsList from './FriendsList';

export type User = {
	id: number;
	firstName: String;
	lastName: String;
	email: String;
	gender: String;
	password: String;
	friends: Array<Friend>;
};
export type Friend = {
	posts: Array<String>;
	firstName: String;
	lastName: String;
};
const FriendListContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
	border: 4px aliceblue;
	border-style: groove;
	padding-right: 4vh;
`;
const DashBoard = (user: User) => {
	console.log(user);
	return (
		<FriendListContainer>
			{user.friends.map((name) => {
				return <FriendsList friend={name}></FriendsList>;
			})}
		</FriendListContainer>
	);
};
export default DashBoard;
