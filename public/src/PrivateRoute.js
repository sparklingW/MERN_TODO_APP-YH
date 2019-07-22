import React from "react";
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({component: Component, isLogined,...rest}) => (
  <Route
    {...rest}
    render={props => localStorage.getItem('token') ? (
        <Component
            {...props}
        />
    ): (<Redirect
            to={{
                pathname: '/users/login',
                state: {from: props.location}
            }}
    />) }
  />
);