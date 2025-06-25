import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, isAuthenticated, role, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && role === 'admin' ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

export default RestrictedRoute;