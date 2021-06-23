import React from 'react'
import styled from 'styled-components'
import FriendsList from './FriendsList'

export type User =  {
	id: number;
	firstName: String;
	lastName: String;
	email: String;
	gender: String;
	password: String;
	friends: Array<Name>;
}
export type Name = {
	firstName: String;
	lastName: String;
};
const FriendListContainer = styled.div`
 display: flex;
 flex-direction: column-reverse;
 justify-content: flex-end;
`;
const DashBoard = (user:User) => {
    console.log(user)
    return (
        <FriendListContainer>
			{user.friends.map((name) => { return <FriendsList name={name}></FriendsList>})}
			</FriendListContainer>
    )
}
export default DashBoard
