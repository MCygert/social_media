import styled from 'styled-components';

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
	return (
		<Form>
			<input type='text' value={'email'}></input>
			<input type='password' value={'password'}></input>
			<ButtonsSection>
				<LoginButton type='button' value={'register'}></LoginButton>
				<LoginButton type='button' value={'login'}></LoginButton>
			</ButtonsSection>
		</Form>
	);
};
