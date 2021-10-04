import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => (
  <Navbar bg="light" expand="lg">
    <Container className="nav-wrapper">
      <Icon.PersonFill className="login-icon" />
      <Navbar.Brand href="#home">
        <h1 className="logo">Bookstore CMS</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <Link to="/">BOOKS</Link>
          <Link to="/categories">CATEGORIES</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
