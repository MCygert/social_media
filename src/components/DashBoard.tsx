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
	border: 4px aliceblue;
	border-style: groove;
	padding-right: 4vh;
	grid-column: 3/4;
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
const OptionList = styled.ul`
	list-style-type: none;
`;
const Option = styled.li`
	margin-right: 1rem;
	margin-bottom: 4vh;
	text-align: center;
	display: block;
	background-color: #000000;
	color: azure;
	width: 130px;
	height: 100px;
	line-height: 60px;
	text-decoration: none;
`;
const DashBoard = (user: User) => {
	console.log(user);
	return (
		<DashboardContainer>
			<Options>
				<OptionList>
				<Option><a>MarketPlace</a></Option>
				<Option><a>Settings</a></Option>
				<Option><a>Help</a></Option>
				<Option><a>Option</a></Option>
				</OptionList>
				</Options>	
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
