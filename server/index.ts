import express from 'express';
const app = express();
const port = 8080;
interface User {
	name: string;
	age: number;
}

app.get('/', (req, res) => {
	const mikolaj: User = {
		age: 23,
		name: 'Mikolaj',
	};
	res.send(mikolaj);
});
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});
