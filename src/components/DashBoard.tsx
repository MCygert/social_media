import React from 'react';
import styled from 'styled-components';
import FriendsList from './FriendsList';
import { Post } from './Post';

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
const DashboardContainer = styled.div`
	display: grid;
	grid-template-columns: auto 1fr auto;
`;
const Posts = styled.div`
	grid-column: 2/3;
	align-self: center;
`;
const Options = styled.div`
	grid-column: 1/2;
`;
const DashBoard = (user: User) => {
	console.log(user);
	return (
		<DashboardContainer>
			<Options> options</Options>
			<Posts>
				{user.friends.map((friend) => {
					return (
						<Post
							posts={friend.posts}
							firstName={friend.firstName}
							lastName={friend.lastName}></Post>
					);
				})}
			</Posts>
			<FriendListContainer>
				{user.friends.map((name) => {
					return <FriendsList friend={name}></FriendsList>;
				})}
			</FriendListContainer>
		</DashboardContainer>
	);
};
export default DashBoard;
