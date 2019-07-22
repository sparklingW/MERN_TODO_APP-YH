import React, { Component } from "react";
import * as element from "../../styled-components/login-page";
import * as func from '../../actions/users';
import { connect } from "react-redux";
import history from '../../history';
import { Alert, AlertEmpty } from "./Alert";
import {login, register} from '../../regulars';
import {onUserInfo} from "../../actions/users";

class Inputs extends Component {
	state = {
		email: '',
		password: '',
		emailError: '',
		passwordError: '',
		valid: true,
		validPass: true,
		success: false,
		requestError: true,
		showError: false,
		display: true,
	};
	onEmailInput = ({target: {value}}) => {
		this.setState({email: value});
	};
	onPasswordInput = ({target: {value}}) => {
		this.setState({password: value});
	};
	onRegisterPage = (  ) => history.push('/users/register');
	clickFunc = () => {
		const { display,showError } = this.state;
		console.log(
			`Display: ${display}`,
			`ShowError: ${showError}`
		);
		this.setState({
			display: false,
		});
		console.log(
			`Display: ${display}`,
			`ShowError: ${showError}`
		);
	};
	validate = () => {
		const { email, password, showError } = this.state;
		let emailError = '';
		let passwordError = '';
		let isValid = true;
		let validPass = true;
		// console.log(`From Validate ShowError: ${showError}`);
		if(!email.length) {
			// emailError = "Email cannot be an empty field";
			isValid = false;
			// this.setState({
			// 	emailError,
			// 	valid: false,
			// }, () => console.log(`From setState: ${this.state.emailError}, valid: ${this.state.valid}`));
			// console.log(emailError);
		} else if(email.length >= 1) {
		if(!email.match(login.email)) {
			// emailError = "Email can include letters(a-z), numbers(0-9) and (.)";
			isValid = false;
			// this.setState({
			// 	emailError,
			// 	valid: false,
			// }, () => console.log(`From setState: ${this.state.emailError}, valid: ${this.state.valid}`));
			// console.log(emailError);
			}
		if(email.match(login.email)) {
			emailError = " ";
			isValid = true;
			// this.setState({
			// 	email,emailError,
			// 	valid: true,
			// }, () => console.log(`Email : From setState: ${email}`));
			// console.log(emailError, email);
			}
		if(showError === true) {
			emailError=" ";
			isValid = false;
			// this.setState({
			// 	emailError,
			// 	valid: false,
			// })
			}
		}
		if(!password) {
			// passwordError = 'Password cannot be an empty field';
			validPass = false;
			// this.setState({
			// 	passwordError,
			// 	validPass: false,
			// }, () => console.log(`From setState: ${this.state.passwordError}`));
			console.log(passwordError);
		}
		if(emailError || passwordError) {
			this.setState({
				emailError,
				passwordError,
				validPass,
				valid: isValid,
			});
		}
		console.log(emailError,
			passwordError,
			validPass,
			isValid,);
		return isValid && validPass;
	};

	static getDerivedStateFromProps(props, state) {
		// console.log(props.isEmail, state.showError);

		if(!props.isEmail || !state.valid) {
			// console.log(props.isEmail, state.showError);
			return {
				showError: true,
			}
		} else if (props.isEmail && state.valid) {
			// console.log(props.isEmail, state.showError);
			return {
				showError: false,
			}
		}
		return {
			showError: false,
		}
	}
	onSubmit = e => {
		e.preventDefault();
		// console.log(`${this.state.valid}`);
		const { email, password, showError } = this.state;
		console.log(`${showError}`);
		if(this.state.showError === true) {
			console.log('Email or password are incorrect');
		}
		let user = {
			email,
			password,
		};
		const isValid = this.validate();
		if(!isValid) {
			console.log('Error');
			this.setState({display: true});
			this.props.onLogin(user);
		} else {
			console.log('From else');
			this.props.onLogin(user);
			this.setState({display: true});
		}
	};
	render () {
		const {
			email,
			password,
			emailError,
			passwordError,
			valid,
			validPass,
		} = this.state;
		return (
			<element.ElementsWrapper>
				<element.Holder>
					{this.state.showError && this.state.display ? <Alert show={this.clickFunc}/> : <AlertEmpty />}
				</element.Holder>
				<element.Holder>
					<element.RegisterWrapper>
						<element.Form onSubmit={this.onSubmit}>
						<element.InputsWrapper>
							<element.Input
								style={{marginTop: "0px"}}
								autoFocus
								type='text'
								value={email}
								placeholder='Please enter email'
								onChange={this.onEmailInput}
							/>{valid ?
								<element.PlaceholderSuccess>{emailError}</element.PlaceholderSuccess>
								:
								<element.PlaceholderError>{emailError}</element.PlaceholderError>}
							<element.Input
								type='password'
								name='password'
								value={password}
								placeholder='Please enter password'
								onChange={this.onPasswordInput}
							/>
						</element.InputsWrapper>
						<element.ButtonsWrapper>
							<element.Submit type='submit'>Submit</element.Submit>
							<element.ToLogin role="button" onClick={this.onRegisterPage}>
								<span>Go to register</span>
							</element.ToLogin>
						</element.ButtonsWrapper>
						</element.Form>
					</element.RegisterWrapper>
				</element.Holder>
			</element.ElementsWrapper>
		)
	}
}
const mapStateToProps = state => ({
	isExist: state.userLoginReducer,
	isEmail: !state.userLoginReducer.requestError
});
const mapDispatchToProps = dispatch => ({
	onLogin: (user) => dispatch(func.onUserLogin(user)),
	onInfo: (info) => dispatch(onUserInfo(info)),
	triggerLogin: (user) => dispatch(func.triggerLogin(user)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Inputs);
