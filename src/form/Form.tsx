import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { User } from '../components/DashBoard';
const axios = require('axios').default;

type FormProps = {
	getAuth: (a: User) => void;
};

export const Form = ({ getAuth }: FormProps) => {
	const [email, setEmail] = useState('email');
	const [password, setPassword] = useState('password');
	let history = useHistory();
	const Form = styled.form`
		font-size: 21px;
		height: 55px;
		display: grid;
		row-gap: 5px;
		justify-content: center;
		height: 100%;
		width: auto;
	`;
	const LoginButton = styled.button`
		border-radius: 25px;
		justify-self: center;
	`;
	const ButtonsSection = styled.div`
		display: grid;
		grid-template-columns: auto auto;
	`;
	const getUser = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/', {
				email: 'test',
				password: 'test',
			});
			if (response.status === 200) {
				getAuth({ ...response.data });
				history.push('dashboard');
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Form>
			<input
				type='text'
				value={email}
				onChange={(e) => setEmail(e.target.value)}></input>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}></input>
			<ButtonsSection>
				<LoginButton type='button' value='hi'>
					Register
				</LoginButton>
				<LoginButton
					value='login'
					type='button'
					placeholder='login'
					onClick={getUser}>
					Login
				</LoginButton>
			</ButtonsSection>
		</Form>
	);
};
