import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/workout-form">Workout Form</Nav.Link>
          <Nav.Link as={Link} to="/workout-list">Workout List</Nav.Link>
          {/* Add other links here */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
