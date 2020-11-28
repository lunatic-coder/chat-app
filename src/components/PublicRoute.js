import React from 'react';
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';

import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routePrpos }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoading) {
    return <Redirect to="/" />;
  }

  return <Route {...routePrpos}>{children}</Route>;
};

export default PublicRoute;
