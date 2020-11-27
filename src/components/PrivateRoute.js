import React from 'react';
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children, ...routePrpos }) => {
  const profile = useProfile();

  if (!profile) {
    return <Redirect to="signin" />;
  }

  return <Route {...routePrpos}>{children}</Route>;
};

export default PrivateRoute;
