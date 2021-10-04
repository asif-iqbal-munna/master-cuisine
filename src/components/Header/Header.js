import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink className="navbar-brand p-color fw-bolder fs-3" to="/">
            Master Cuisine
          </NavLink>
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
                to="/course"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ff9f1a",
                }}
              >
                Courses
              </NavLink>
              <NavLink
                className="nav-link fs-5 s-color"
                to="/class"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ff9f1a",
                }}
              >
                Classes
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
