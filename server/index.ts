import express from 'express';
const app = express();
const port = 8080;
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
interface loginUser {
	email: String;
	password: String;
}
const users: Array<User> = require('./MOCK_DATA.json');
app.use(express.json());

app.get('/', (req, res) => {
	res.send(users);
});
app.post('/', (req, res) => {
	const requestData: loginUser = req.body;
	res.send(requestData);
});
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});
