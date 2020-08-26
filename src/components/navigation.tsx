import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import NavAuth from './navauth';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

const Navigation = () => {
  return <Router>
    <Navbar bg="light" sticky="top">
      <Navbar.Brand href="#home">Glowing Rod</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>

      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <NavAuth></NavAuth>
      </Nav>
    </Navbar>
  </Router>
};

export default Navigation;