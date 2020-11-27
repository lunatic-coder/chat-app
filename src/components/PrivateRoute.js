import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...routePrpos }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="signin" />;
  }

  return <Route {...routePrpos}>{children}</Route>;
};

export default PrivateRoute;
