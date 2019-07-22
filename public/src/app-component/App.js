import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import { Welcome } from '../welcome-component/welcome-component.jsx';
import Register from '../register-component/register-component';
import Login from '../login-component/login-component';
import UserProfile from '../user-component/user-component';
import CreateEvent from '../create-component/create-event';
import EventsShow from '../user-component/events-show';
import EditEvent from '../edit-component/edit-component';
import UserInfo from '../user-component/user-info-main';
import { PrivateRoute } from '../PrivateRoute';
import ModalCreate from "../user-component/holders/ModalCreate";

class App extends Component {
  state = {
    isLogined: false,
  };
  onLoginTrigger = () => {
    this.setState({
      isLogined: true,
    });
  };
  render() {
    return (
      <Fragment>
        <Switch>
          <PrivateRoute path='/users/profile' component={UserProfile} />
          <PrivateRoute path='/events/create' component={CreateEvent} />
          <PrivateRoute path='/events/edit/' component={EditEvent} />
          <PrivateRoute path='/events/show/' component={EventsShow} />
          <PrivateRoute path='/users/info' component={UserInfo} />
          <Route exact path='/' component={Welcome}/>
          <Route path='/users/register' component={Register}/>
          <Route
            path='/users/login'
            component={() => (
                <Login onLogin={this.onLoginTrigger}/>
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
