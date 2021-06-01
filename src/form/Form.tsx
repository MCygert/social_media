import { SyntheticEvent } from 'react';
import styled from 'styled-components';
const axios = require('axios').default;

export const Form = () => {
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
		const response = await axios.post('http://localhost:8080/', {
			email: 'test',
			pasword: 'test',
		});
		console.log('☺️' + response);
	};
	return (
		<Form>
			<input type='text' value={'email'}></input>
			<input type='password' value={'password'}></input>
			<ButtonsSection>
				<LoginButton type='button' value={'register'}></LoginButton>
				<LoginButton
					type='button'
					value={'login'}
					onClick={getUser}></LoginButton>
			</ButtonsSection>
		</Form>
	);
};
