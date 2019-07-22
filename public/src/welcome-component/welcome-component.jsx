import React from 'react';
import  history  from '../history';
import {
	ButtonLogin,
	ButtonRegister,
	ButtonsContainer, ButtonsWrapper,
	SiteInfo, TitleWrapper,
	Wrapper,
	Title
} from '../styled-components/welcome-page';

export const Welcome = props => {
	const onLoginPage = () => history.push('/users/login');
	const onRegisterPage = () => history.push('/users/register');
	return (
		<Wrapper>
			<div>
				<TitleWrapper>
					<Title>HELLO DEAR USER, THIS IS TODO WEBSITE</Title>
					<SiteInfo>If you are new on this website please Register new account</SiteInfo>
					<SiteInfo>If you already have account please log in</SiteInfo>
				</TitleWrapper>
				<ButtonsWrapper>
					<ButtonsContainer>
						<ButtonRegister onClick={onRegisterPage}>Register</ButtonRegister>
						<ButtonLogin onClick={onLoginPage}>Login</ButtonLogin>
					</ButtonsContainer>
				</ButtonsWrapper>
			</div>
		</Wrapper>
	)
};