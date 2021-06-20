import React from 'react'
export interface User {
	id: number;
	firstName: String;
	lastName: String;
	email: String;
	gender: String;
	password: String;
	friends: Array<Name>;
}
interface Name {
	firstName: String;
	lastName: String;
}
const DashBoard = (user:User) => {
    console.log(user)
    return (
        <div>
            <h1>{user.firstName}</h1>
        <h1>{"I AM PROTECTED"}</h1>         
        </div>
    )
}
export default DashBoard
