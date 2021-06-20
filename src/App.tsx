import { Form } from './form/Form';
import { Navbar } from './navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import DashBoard, { User } from './components/DashBoard';
function App() {
	const [user, setUser] = useState<User>();

	const handleLogin = (loggedUser: User) => {
		console.log(loggedUser);
		setUser(loggedUser);
	};
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Router>
				<Route path='/' exact>
					<Form getAuth={handleLogin}></Form>
				</Route>
				<ProtectedRoute
					path='/dashboard'
					user={user}
					Component={DashBoard}></ProtectedRoute>
			</Router>
		</div>
	);
}

export default App;
