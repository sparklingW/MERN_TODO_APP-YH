import React, { Component } from 'react';
import history from '../history';
import { Form,
	Input,
	Cancel,
	Wrapper,
	ButtonsWrapper,
	Create,
	Title,
	Holder,
	PlaceholderError,
	PlaceholderSuccess
} from '../styled-components/create-page';
import * as func from '../actions/events';
import { connect } from 'react-redux';
import { create } from '../regulars';


class CreateEvent extends Component {
	state = {
		name: '',
		date: new Date().toJSON().toLocaleString("ru").slice(0,10),
		min: new Date().toJSON().slice(0,10),
		max: '2019-12-31',
		defValue: new Date().toJSON().slice(0,10),
		nameError: '',
		nameLength: 40,
		validName: true,
	};

	validate = () => {
		let nameError = '';
		const { name } = this.state;
		if(name.length < 1) {
			nameError = "Name field can't be empty";
			this.setState({
				nameError,
				validName: false,
			})
		} else if(name.length > 1) {
			if(!name.match(create.name)) {
				nameError = "Please do not use white spaces";
				this.setState({
					nameError,
					validName: false,
				})
			}
			if(name.match(create.name)) {
				nameError = " ";
				this.setState({
					validName: true,
				})
			}
		}
		if(nameError) {
			this.setState({nameError});
		}
		return true;
	};
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
	onCancel = () => this.props.onClose();
	onSubmit = (e) => {
		const { name, date } = this.state;
		e.preventDefault();
		const newEvent = {
			name: name,
			date: date,
		};
		const isValid = this.validate();
			if (!isValid) {
				new Error('Error');
			} else {
				this.props.onClose();
				this.props.onCreate(newEvent);
			}
	};

	render() {
	const {
		name,
		date,
		nameError,
		max,
		min,
		nameLength
	} = this.state;
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
					maxLength={nameLength}
				/>
				{this.state.validName && !this.state.name ?
					<PlaceholderSuccess>{nameError}</PlaceholderSuccess>
					:
					<PlaceholderError><span>{nameError}</span></PlaceholderError>}
				<Input
					type='date'
					value={date}
					min={min}
					max={max}
					onChange={this.onChangeDate}
				/>
				<ButtonsWrapper>
					<Create type='submit' disabled={ !this.state.name }>Create</Create>
					<Cancel onClick={this.onCancel}>Cancel</Cancel>
				</ButtonsWrapper>
			</Form>
			</Holder>
		</Wrapper>
	)
	}
}

const mapDispatchToProps = dispatch => ({
	onCreate: (event) => dispatch(func.createEvent(event))
});

export default connect(null,mapDispatchToProps)(CreateEvent)
// history.push('/events/show')
