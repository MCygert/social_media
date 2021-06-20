import { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
const axios = require('axios').default;

type FormProps = {
	getAuth: (a: boolean) => void;
};

export const Form = ({ getAuth }: FormProps) => {
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
				email: 'xshortell0@joomla.org',
				password: 'qtiuEwsd8zA',
			});
			if (response.status === 200) {
				getAuth(response);
				history.push('dashboard');
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Form>
			<input type='text' value={'email'}></input>
			<input type='password' value={'password'}></input>
			<ButtonsSection>
				<LoginButton type='button' value='hi'></LoginButton>
				<div>
					<LoginButton
						type='button'
						placeholder='login'
						onClick={getUser}></LoginButton>
				</div>
			</ButtonsSection>
		</Form>
	);
};
