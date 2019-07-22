import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch, NavLink} from "react-router-dom";
import { connect } from 'react-redux';
// import {
//   Wrapper,
//   RightSection,
//   LeftSection,
//   Sections,
//   StyledLink,
//   LeftSectionWrapper,
//   Links,
//   ButtonOutHolder,
//   LogOut, Create,
//   CreateLeft,
// 	UserInfo,
// } from '../styled-components/user-page';
import * as comp from "../styled-components/events-show";
import Events from './user-events';
import Info from './user-info';
import history from '../history';
import {onUserInfo, onUserLogOut} from "../actions/users";
import ModalCreate from "./holders/ModalCreate";
class EventsShow extends Component {
	state = {
		isOpen: false,
	};
	componentDidMount() {
		this.props.onInfo(this.props.info);
	}
	toggleTodo = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	};
	Logout = (  ) => {
		this.props.onLogout();
		localStorage.removeItem('token');
		localStorage.removeItem('owner');
		history.push('/users/login');
	};
	onCreate = () => {
		history.push('/events/create');
	};
	render() {
		const { name, email } = this.props.info;
		return (
			<BrowserRouter>
				<ModalCreate
					show={this.state.isOpen}
					onClose={() => this.toggleTodo()}
				/>
				<comp.CreateCircle
					role="button"
					onClick={() => this.toggleTodo()}
				>
					<span>Add</span>
				</comp.CreateCircle>
				<comp.GlobalHolder>
					<comp.Header>
						<comp.UserInfo>
							<comp.TextHolder>
								<comp.Text>{name}</comp.Text>
								<comp.Text><span style={{fontSize: "16px"}}>{email}</span></comp.Text>
							</comp.TextHolder>
							{/*<comp.CreateButtonHeader onClick={() => this.toggleTodo()}>Create</comp.CreateButtonHeader>*/}
						</comp.UserInfo>
						<comp.LogoutButton onClick={() => this.Logout()}>Log out</comp.LogoutButton>
					</comp.Header>
					<comp.ContentWrapper>
						{/*<comp.EventsNumero>*/}
						{/*	<comp.Text>Name</comp.Text>*/}
						{/*	<comp.Text>Date</comp.Text>*/}
						{/*	<div>*/}
						{/*		<button>Edit</button>*/}
						{/*		<button>Delete</button>*/}
						{/*	</div>*/}
						{/*</comp.EventsNumero>*/}
						<comp.EventHolder>
							<Events />
						</comp.EventHolder>
					</comp.ContentWrapper>
				</comp.GlobalHolder>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = state => ({
	info: state.newUserReducer,
  events: state.evenstReducer.events,
});
const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(onUserLogOut()),
	onInfo: (info) => dispatch(onUserInfo(info))
});
export default connect(mapStateToProps, mapDispatchToProps)(EventsShow);


{/*<div style={{overflowX: "hidden"}}>*/}
{/*	<BrowserRouter>*/}
{/*		<Wrapper>*/}
{/*			<ModalCreate*/}
{/*				show={this.state.isOpen}*/}
{/*				onClose={() => this.toggleTodo()}*/}
{/*			/>*/}
{/*			<Sections>*/}
{/*				<LeftSection>*/}
{/*					<LeftSectionWrapper>*/}
{/*						<Links>*/}
{/*							<StyledLink>*/}
{/*								<UserInfo>*/}
{/*									<span>User name: {name}</span>*/}
{/*									<span style={{fontSize: "16px"}}>User email: {email}</span>*/}
{/*								</UserInfo>*/}
{/*							</StyledLink>*/}
{/*						</Links>*/}
{/*						<ButtonOutHolder>*/}
{/*							<CreateLeft onClick={() => this.toggleTodo()}>Create todo</CreateLeft>*/}
{/*							<LogOut onClick={() => this.Logout()}>Log out</LogOut>*/}
{/*						</ButtonOutHolder>*/}
{/*					</LeftSectionWrapper>*/}
{/*				</LeftSection>*/}
{/*				<RightSection>*/}
{/*					<Switch>*/}
{/*						<Route path='/events/show' component={Events}/>*/}
{/*					</Switch>*/}
{/*				</RightSection>*/}
{/*			</Sections>*/}
{/*		</Wrapper>*/}
{/*	</BrowserRouter>*/}
{/*</div>*/}
{/*)*/}
