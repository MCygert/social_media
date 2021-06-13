import { Form } from './form/Form';
import { Navbar } from './navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
	const [isAuth, setIsAuth] = useState(false);
	const setAuthorisation = (auth: boolean) => {
		setIsAuth(auth);
		console.log(auth);
	};
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Router>
				<Route path='/' exact>
					<Form getAuth={setAuthorisation}></Form>
				</Route>
			</Router>
		</div>
	);
}

export default App;
