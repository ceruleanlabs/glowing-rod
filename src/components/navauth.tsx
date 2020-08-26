import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth0 } from '@auth0/auth0-react';

const NavAuth = () => {
  const { loginWithRedirect, logout, isLoading, error, isAuthenticated, user } = useAuth0();

  if (isLoading)
  {
    return <Navbar.Text>Loading...</Navbar.Text>
  }
  else if (error)
  {
    return <Navbar.Text>ERROR: {error.message}</Navbar.Text>
  }
  else if (isAuthenticated)
  {
    return <Nav>
        <Navbar.Text>{user.name}</Navbar.Text>
        <Nav.Link onClick={() => logout({ returnTo: window.location.origin })}>Logout</Nav.Link>
      </Nav>
  }
  else
  {
    return <Nav>
      <Nav.Link onClick={() => loginWithRedirect()}>Login</Nav.Link>
    </Nav>
  }
};

export default NavAuth;