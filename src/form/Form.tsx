import { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const axios = require('axios').default;

type FormProps = {
	getAuth: (a: boolean) => void;
};

export const Form = ({ getAuth }: FormProps) => {
	const Form = styled.form`
		font-size: 21px;
		height: 55px;
		display: grid;
		row-gap: 5px;
		justify-content: center;
		height: 100%;
		width: auto;
	`;
	const LoginButton = styled.input`
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
			getAuth(true);
			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Form>
			<input type='text' value={'email'}></input>
			<input type='password' value={'password'}></input>
			<ButtonsSection>
				<LoginButton type='button' value={'register'}></LoginButton>
				<Link to='/dashboards'>
					<LoginButton
						type='button'
						value={'login'}
						onClick={getUser}></LoginButton>
				</Link>
			</ButtonsSection>
		</Form>
	);
};
