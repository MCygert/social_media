interface User {
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

export const findUser = (email, password): User => {
    const users: Array<User> = require('./MOCK_DATA.json');
    return users.find(user => user.email === email && user.password === password)
}







