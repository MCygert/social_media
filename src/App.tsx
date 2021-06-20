import { Form } from './form/Form';
import { Navbar } from './navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import  DashBoard  from './components/DashBoard';
function App() {
	const [isAuth, setIsAuth] = useState(false);
	const setAuthorisation = (auth: boolean) => {
		console.log(auth);
		setIsAuth(auth);
	};
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Router>
				<Route path='/' exact>
					<Form getAuth={setAuthorisation}></Form>
				</Route>
				<ProtectedRoute rest="/profile" setAuth={isAuth} component={DashBoard}></ProtectedRoute>
			</Router>
		</div>
	);
}

export default App;
