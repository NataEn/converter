import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = props => {
  return (
    <React.Fragment>
      <Navbar className="navbar navbar-expand navbar-default">
        <div className="container">
          <NavbarBrand className="mr-auto navbar-default" href="/">
            <img src="" height="50" width="50" alt="Converter" />
            <strong>Converter</strong>
          </NavbarBrand>
          <Collapse isOpen="true">
            <Nav>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home"> Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-bell"> What's New?</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-info"> About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card"> Contact Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button outline>
                  <span className="fa fa-sign-in" />
                  Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};
