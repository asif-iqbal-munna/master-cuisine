import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink
          className="navbar-brand p-color fw-bolder fs-3"
          to="/"
        >
          Master Cuisine
        </NavLink>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className="nav-link fs-5 s-color"
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "#ff9f1a",
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link fs-5 s-color"
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                color: "#ff9f1a",
              }}
            >
              About
            </NavLink>
            <NavLink
              className="nav-link fs-5 s-color"
              to="/service"
              activeStyle={{
                fontWeight: "bold",
                color: "#ff9f1a",
              }}
            >
              Service
            </NavLink>
            <NavLink
              className="nav-link fs-5 s-color"
              to="/recipes"
              activeStyle={{
                fontWeight: "bold",
                color: "#ff9f1a",
              }}
            >
              Recipes By Cuisine
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
