import React from 'react';
import { Info, Inputs } from "./holder/index";
import {
	Wrapper,
} from '../styled-components/register-page';

const Register = props => {
	return (
		<Wrapper>
			<div style={{backgroundColor: "#fff", borderRadius: "4px 4px", border: "1px solid #adadad"}}>
				<Info />
				<Inputs />
			</div>
		</Wrapper>
	)
};

export default Register;
