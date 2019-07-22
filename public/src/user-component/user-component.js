import React from 'react';
import { BrowserRouter, Link, Route, Switch, NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import {
  Wrapper,
  RightSection,
  LeftSection,
  Sections,
  StyledLink,
  LeftSectionWrapper,
  Links,
  ButtonOutHolder,
  LogOut, CreateLeft
} from '../styled-components/user-page';
import Events from './user-events';
import Info from './user-info';
import history from '../history';
import { onUserLogOut } from "../actions/users";
import ModalCreate from "./holders/ModalCreate";

const EventsShow = props => {
  const todos_lenght =  props.events.length;
  const Logout = (  ) => {
    props.onLogout();
    localStorage.removeItem('token');
    localStorage.removeItem('owner');
    history.push('/users/login');
  };
  const onCreate = () => {
    history.push('/events/create');
  };
  return (
    <BrowserRouter>
      <Wrapper>
        <Sections>
          <LeftSection>
            <LeftSectionWrapper>
              <Links>
                <StyledLink>
                  <NavLink to='/users/info'
                           style={{
                             color: 'rgba(170,169,169,0.91)',
                             padding: '10px',
                             textDecoration: 'none',
                             borderTop: '1px solid rgba(246,245,245,0.1)',
                             borderBottom: '1px solid rgba(246,245,245,0.1)',
                             width: 'inherit'
                           }}
                           activeStyle={{
                             padding: '10px',
                             textDecoration: 'none',
                             color: '#f6f5f5',
                             borderTop: '1px solid rgba(246,245,245,0.3)',
                             borderBottom: '1px solid rgba(246,245,245,0.3)',
                             borderLeft: '6px solid rgba(66,62,72,0.96)',
                             width: 'inherit'
                           }}
                  >User Info</NavLink>
                </StyledLink>
                <StyledLink>
                  <NavLink to='/events/show'
                           style={{
                             color: 'rgba(170,169,169,0.91)',
                             padding: '10px',
                             textDecoration: 'none',
                             borderTop: '1px solid rgba(246,245,245,0.1)',
                             borderBottom: '1px solid rgba(246,245,245,0.1)',
                             width: 'inherit'
                           }}
                           activeStyle={{
                             padding: '10px',
                             textDecoration: 'none',
                             color: '#f6f5f5',
                             borderTop: '1px solid rgba(246,245,245,0.3)',
                             borderBottom: '1px solid rgba(246,245,245,0.3)',
                             width: 'inherit',
                             borderLeft: '6px solid rgba(66,62,72,0.96)',
                           }}
                  >
                    Todos {todos_lenght}
                  </NavLink>
                  {/*rgba(170,169,169,0.91)*/}
                </StyledLink>
              </Links>
              <ButtonOutHolder>
                <CreateLeft onClick={() => onCreate()}>Create todo</CreateLeft>
                <LogOut onClick={() => Logout()}>Log out</LogOut>
              </ButtonOutHolder>
            </LeftSectionWrapper>
          </LeftSection>
          <RightSection>
            <Switch>
              <Route path='/events/show' component={Events}/>
              <Route path='/users/info' component={Info}/>
            </Switch>
          </RightSection>
        </Sections>
      </Wrapper>
    </BrowserRouter>
  )
};

const mapStateToProps = state => ({
  events: state.evenstReducer.events,
});
const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(onUserLogOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(EventsShow);
