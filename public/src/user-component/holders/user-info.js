import React from "react";
import { UserInfo } from "../../styled-components/user-info";

const User = props => {
	return (
		<UserInfo>
			<p><span style={{textDecoration: 'underline'}}>Your Name</span>: {props.name}</p>
			<p><span style={{textDecoration: 'underline'}}>Your Email</span>: {props.email}</p>
			<p>
				<span style={{textDecoration: 'underline'}}>You have</span>: {props.length} {props.length > 1 || props.length === 0 ? 'Todos' : 'Todo'}
			</p>
		</UserInfo>
	)
};

export default User;