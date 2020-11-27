import React, { useState } from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ children, ...routePrpos }) => {
  const profile = useState(false);

  if (!profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routePrpos}>{children}</Route>;
};

export default PublicRoute;
