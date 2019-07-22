import React, { Component } from 'react';
import history from '../history';
import axios from 'axios';
import { connect } from "react-redux";
import * as func from '../actions/events';
import {
	Form,
	Input,
	Cancel,
	Wrapper,
	ButtonsWrapper,
	Create,
	Holder,
	Title,
	PlaceholderError,
	PlaceholderSuccess
} from '../styled-components/edit-page';
import { edit } from '../regulars';

class EditEvent extends Component {
	state = {
		name: '',
		date: new Date().toJSON().slice(0,10),
		itemId: '',
		nameError: '',
		dateError: '',
		min: new Date().toJSON().slice(0,10),
		max: '2019-12-31',
		defValue: new Date().toJSON().slice(0,10),
		nameLength: 25,
		validName: false,
	};
	// url[url.length - 1]
	onChangeName = ({target: {value}}) => {
		this.setState({
			name: value,
		});
	};
	onChangeDate = ({target: {value}}) => {
		this.setState({
			date: value,
		});
	};
	componentDidMount() {
		const url = window.location.href.split('/');
		this.setState({itemId:this.props._id}, () => {
			axios.get(`http://localhost:3001/events/show/${this.props._id}`, {headers: {'x-auth-token': localStorage.getItem('token')}})
				.then(ress => {
						console.log(ress.data);
						this.setState({
								name: ress.data.events.name,
								date: ress.data.events.date.slice(0,10),
						});
						this.validate();
				})
				.catch(err => {
						console.log(err)
				})
		});
		}

	validate = () => {
		let nameError = 'Please enter description of the task';
		let dateError = '';
		if(!this.state.name) {
			nameError = "";
			this.setState({
				nameError,
				validName: false,
			})
		}
		if(this.state.name) {
			if(!this.state.name.match(edit.name)) {
				nameError = "";
				this.setState({
					nameError,
					validName: false,
				})
			}
			if(this.state.name.match(edit.name)) {
				nameError = "";
				this.setState({
					nameError,
					validName: true,
				})
			}
		}
		if(nameError || dateError) {
			this.setState({nameError, dateError});
		}
		console.log('Validate--> ',this.state.name);
		return true;
	};
	onErrorName = e => this.setState({name: ''});
	onCancel = (  ) => history.push('/events/show');
	onSubmit = (e) => {
		e.preventDefault();
		const isValid = this.validate();
		const {itemId:id, name, date} = this.state;
			if(!isValid) {
				new Error('Incorrect Data');
			} else {
				this.props.eventEdit({id, name, date});
				this.props.onClose();
			}
	};
	render() {
		const { date, max, min, name, nameError } = this.state;
		return (
			<Wrapper>
				<Holder>
				<Form onSubmit={this.onSubmit}>
					<Input
						autoFocus
						type='text'
						placeholder='Please enter todo description'
						value={name}
						onChange={this.onChangeName}
						maxLength={40}
					/>
					{this.state.validName
					?
					<PlaceholderSuccess><span style={{color: "rgba(0,0,0,0)"}}>{nameError}</span></PlaceholderSuccess>
						:
						<PlaceholderError><span style={{color: "rgba(0,0,0,0)"}}>{nameError}</span></PlaceholderError>}
					<Input
						type='date'
						value={date}
						min={min}
						max={max}
						onChange={this.onChangeDate}
					/>
					<ButtonsWrapper>
						<Create type='submit' disabled={ !this.state.name }>Edit</Create>
						<Cancel onClick={this.props.onClose}>Cancel</Cancel>
					</ButtonsWrapper>
				</Form>
				</Holder>
			</Wrapper>
			)
	}
}

const mapDispatchToProps = dispatch => ({
	eventEdit: (id, name, date) => dispatch(func.eventEdit(id, name, date))
});

export default connect(null,mapDispatchToProps)(EditEvent)
