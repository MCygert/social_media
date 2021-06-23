import React from "react";
import styled from "styled-components";
import { Name } from "./DashBoard";

export type FriendListProperties = {
    name: Name
}

const FriendName = styled.h1`

color: #537fa5;


`;

const FriendsList = ({name}: FriendListProperties) => {
	return <FriendName>{name.firstName + " " + name.lastName}</FriendName> }



export default FriendsList