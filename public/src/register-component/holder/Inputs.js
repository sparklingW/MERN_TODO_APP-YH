import React, { Component } from "react";
import * as element from "../../styled-components/register-page";
import history from '../../history';
import { connect } from "react-redux";
import * as func from '../../actions/users';
import { register } from '../../regulars';
import { Alert, AlertEmpty } from "./Alert";
class Inputs extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		nameError: 'Some data',
		emailError: 'Some data',
		passwordError: 'Some data',
		confirmPasswordError: 'Enter confirm password',
		disabled: true,
		validName: false,
		validEmail: true,
		validPassword: true,
		validConfirm: true,
		showError: false,
		display: false,
	};
	static getDerivedStateFromProps(props, state) {
		if(!props.isEmail || !state.validEmail) {
			return {
				showError: true,
			}
		} else if (props.isEmail && state.validEmail) {
			return {
				showError: false,
			}
		}
		return {
			showError: false,
		}
	}
	onNameInput = e => {
		this.setState({
			name: e.target.value
		},
		() => {
			!this.state.name.match(register.name) || this.state.name.length < 1  ? this.setState({disabled: true}) : console.log('False');
			this.checkDisabled();
		})
	};
	onEmailInput = ({target: {value}}) => {
		this.setState({
			email: value,
		},
		() => {
			this.state.email.match(register.email) ? this.setState({disabled: false}) : this.setState({disabled: true});
			this.checkDisabled();
		})
	};
	onPasswordInput = ({target: {value}}) => {
		this.setState({
			password: value,
		}, () => {
			!this.state.password.match(register.password) || this.state.password.length < 3 ? this.setState(
				{
					disabled: true,
					confirmPassword: "",
					confirmPasswordError: "Please confirm your password",
				}) : console.log("False");
		});
	};
	onConfirmPass = ({target: {value}}) => {
		let confirmPasswordError = "Some data";
		this.setState({
			confirmPassword: value,
		}, () => {
			this.checkDisabled();
			if(this.state.confirmPassword === this.state.password) {
				confirmPasswordError = "Passwords matches";
				this.setState({
					confirmPasswordError,
					validConfirm: true,
				});
			}
			if(this.state.confirmPassword !== this.state.password) {
				confirmPasswordError = "Passwords do not match";
				this.setState({
					disabled: true,
					confirmPasswordError,
					validConfirm: false,
				});
				this.checkDisabled();
			}
		});
	};
	checkDisabled = () => {
		this.state.name &&
		this.state.email &&
		this.state.password.length >= 1 &&
		this.state.confirmPassword &&
		this.state.confirmPassword === this.state.password ?
			this.setState({disabled: false}) :
			this.setState({disabled: true});
	};
	onLoginPage = (  ) => history.push('/users/login');
	clickFunc = () => {
		this.setState({display: false});
	};
	validate = () => {
		const { name, email, password, confirmPassword } = this.state;
		let nameError = 'Some data';
		let emailError = 'Some data';
		let passwordError = 'Some data';
		let confirmPasswordError = '';
		let validName = null;
		//Name validation
		if(name.length === 0) {
			nameError = `Name cannot be an empty string`;
			this.setState(
				{
					nameError,
					validName: false,
				}, () => console.log(`From setState: ${this.state.nameError}`));
		}
		 if(name.length > 1) {
			if(!name.match(register.name)) {
				nameError = "Some data";
				this.setState({
					nameError,
					validName: false,
				});
			}
			if(name.match(register.name)) {
				nameError = "Some data";
				validName = true;
				this.setState({
					nameError,
					validName,
				});
			}
		}
		//Email validation
		if(email.length < 1) {
			emailError = "Email cannot be an empty field";
			this.setState({
				emailError,
				validEmail: false,
			}, () => console.log(`From setState: ${this.state.emailError}`));
			console.log(emailError);
		} else if(email.length > 1) {
			if(!email.match(register.email)) {
				emailError = "Email can include letters(a-z), numbers(0-9) and (.)";
				this.setState({
					emailError,
					validEmail: false,
				}, () => console.log(`From setState: ${this.state.emailError}`));
				console.log(emailError);
			}
		}
		if(email.match(register.email)) {
			emailError = "Some data";
			this.setState({
				emailError,
				validEmail: true,
			}, () => console.log(`From setState: ${this.state.emailError}`));
			console.log(emailError);
		}
		if(!email.match(register.email)) {
			emailError = "Email can include (a-z), (0-9), (@) and (.)";
			this.setState({
				emailError,
				validEmail: false,
			})
		}
		//Password validation
		if(!password) {
			passwordError = 'Password length must be 3 or more symbols';
			this.setState({
				passwordError,
				validPassword: false,
			}, () => console.log(`From setState: ${this.state.passwordError}`));
			console.log(passwordError);
		} else if(password.length >= 3) {
			if(!password.match(register.password)) {
				passwordError = "Some data";
				this.setState({
					passwordError,
					validPassword: false,
				}, () => console.log(`From setState: ${this.state.passwordError}`));
				console.log(passwordError);
			}
		}
		if(password.match(register.password)) {
			passwordError = "Some data";
			this.setState({
				passwordError,
				validPassword: false,
			}, () => console.log(`From setState: ${this.state.passwordError}`));
			console.log(passwordError);
		}
		//Confirm password
		if(confirmPassword !== password) {
			confirmPasswordError = 'Passwords do not match';
			this.setState({
				confirmPasswordError,
			}, () => console.log(`From setState: ${this.state.confirmPasswordError}`));
		}
		if(confirmPassword === password) {
			confirmPasswordError = 'Passwords matches';
			this.setState({
				confirmPasswordError,
			}, () => console.log(`From setState: ${this.state.confirmPasswordError}`));
		}
		if(emailError || passwordError || nameError || confirmPasswordError) {
			this.setState({emailError, passwordError, nameError, confirmPasswordError });
		}
		return true;
		// return true;
	};
	onSubmit = (e) => {
		const { name, email, password, confirmPassword, showError } = this.state;
		e.preventDefault();
		const user = {
			name,
			email,
			password
		};
		const isValid = this.validate();
		if(!isValid) {
			console.log('Error');
			this.setState({display: true});
			this.props.onRegister(user);
		} else {
			console.log('From else');
			this.setState({display: true});
			this.props.onRegister(user);
		}
	};
	render() {
		const {
			name,
			email,
			password,
			emailError,
			nameError,
			passwordError,
			confirmPassword,
			confirmPasswordError,
			disabled
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
									style={{marginTop: "0"}}
									autoFocus
									maxLength={20}
									type='text'
									placeholder='Please enter name'
									value={name}
									onChange={this.onNameInput}
								/>
								{this.state.validName ?
									<element.PlaceholderSuccess>{nameError}</element.PlaceholderSuccess>
											:
									<element.PlaceholderError>{nameError}</element.PlaceholderError>
								}
								<element.Input
									type='text'
									value={email}
									placeholder='Please enter email'
									onChange={this.onEmailInput}
								/>
								{this.state.validEmail ?
										<element.PlaceholderSuccess>{emailError}</element.PlaceholderSuccess>
										:
									<element.PlaceholderError><span style={{color: "rgba(191,0,0,0.96)"}}>{emailError}</span></element.PlaceholderError>
								}
								<element.Input
									type='password'
									min={3}
									placeholder='Please enter password'
									value={password}
									onChange={this.onPasswordInput}
								/>
								{this.state.validPassword ?
										<element.PlaceholderSuccess>{passwordError}</element.PlaceholderSuccess>
										:
										<element.PlaceholderError>{passwordError}</element.PlaceholderError>
									}
								<element.Input
									type='password'
									placeholder='Please confirm password'
									value={confirmPassword}
									onChange={this.onConfirmPass}
								/>
								{this.state.validConfirm ?
									<element.PlaceholderSuccess><span style={{
										color: this.state.confirmPassword ? "#4ace6f" : "rgba(0,0,0,0)"
									}}
									>{confirmPasswordError}</span></element.PlaceholderSuccess>
									:
									<element.PlaceholderError><span style={{color: "rgba(191,0,0,0.96)"}}>{confirmPasswordError}</span></element.PlaceholderError>
								}
							</element.InputsWrapper>
							<element.ButtonsWrapper>
								<element.Submit
									type='submit'
									disabled={disabled}
								>Submit
								</element.Submit>
								<element.ToLogin onClick={this.onLoginPage}>Go to login</element.ToLogin>
							</element.ButtonsWrapper>
						</element.Form>
					</element.RegisterWrapper>
				</element.Holder>
			</element.ElementsWrapper>
		)
	}
}

const mapStateToProps = state => ({
	isExist: state.newUserReducer,
	isEmail: !state.newUserReducer.requestNewError,
	errorEmail: state.newUserReducer.requestNewError,
});

const mapDispatchToProps = dispatch => ({
	onRegister: (user) => dispatch(func.newUserReq(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
