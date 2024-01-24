import React from 'react';
// import About from './About';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1(props) {
  const inputStyle = {
    '::placeholder': {
      color: 'red',
    },
  };
  return (
    <Navbar expand="lg" className={`bg-${props.mode} navbar-${props.mode}`}>

      <Container fluid>
        <Navbar.Brand className="fs-3 me-3" to="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="/about">About</NavLink>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 opacity-25"
              aria-label="Search"
              style={inputStyle}/>
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className={`form-check form-switch ms-4 me-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


Navbar1.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
}


export default Navbar1;