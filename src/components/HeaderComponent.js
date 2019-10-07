import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark className="navbar sticky-top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto navbar-default" href="/">
              <img
                src={this.props.logo}
                height="30"
                width="30"
                alt="Converter"
              />{" "}
              <strong>Coverter</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav>
                <NavItem>
                  <NavLink
                    className="header nav-link d-flex align-self-center"
                    to="/home"
                  >
                    <span className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link header" to="/about">
                    <span className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link header" to="/contact">
                    <span className="fa fa-address-card fa-lg" />{" "}
                    <span> Contact</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
