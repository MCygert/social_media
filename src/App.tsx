import { Form } from './form/Form';
import { Navbar } from './navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import DashBoard, { User } from './components/DashBoard';
import styled from 'styled-components';
function App() {
	const MainComponent = styled.div`
		background-color: grey;
	`;
	const [user, setUser] = useState<User>();

	const handleLogin = (loggedUser: User) => {
		console.log(loggedUser);
		setUser(loggedUser);
	};
	return (
		<MainComponent>
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
		</MainComponent>
	);
}

export default App;
