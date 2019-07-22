import React from 'react';
import { Info, Inputs } from "./holder/index";
import {
  Wrapper,
} from '../styled-components/login-page';

const Login = props => {
	return (
		<Wrapper>
			<div style={{backgroundColor: "#fff", border: "1px solid #adadad", borderRadius: "4px 4px"}}>
				<Info />
				<Inputs />
			</div>
		</Wrapper>
	)
};

export default Login;
