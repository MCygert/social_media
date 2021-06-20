import express from 'express';
import { findUser } from './findUser';
import cors from 'cors';
const app = express();
const port = 8080;

interface loginUser {
	email: String;
	password: String;
}
app.use(cors());
app.options('*', cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('I am working');
});

app.post('/', (req, res) => {
	const requestData: loginUser = req.body;
	const foundUser = findUser(requestData.email, requestData.password);
	console.log(req.body);
	res.set('Access-Control-Allow-Origin', '*');
	if (foundUser === undefined) {
		res.status(404).send("Didn't found that user");
	}
	res.status(200).send(foundUser);
});
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});
