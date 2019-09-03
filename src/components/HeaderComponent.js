import React, { Component } from "react";
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  Button,
  Jumbotron,
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
<<<<<<< HEAD
      <React.Fragment className="mr-0 ml-0 pr-0 pl-0">
=======
      <React.Fragment>
>>>>>>> 15df259f670468f1a4a99f5eefda5768b56ffef7
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
                <NavItem>
                  <Button className="login" outline>
                    <span className="fa fa-sign-in fa-lg" /> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
<<<<<<< HEAD
        {/* <Jumbotron className="pr-0">
          <div className="container">
            <Row>
              <Col sm={2} className="p-0 m-0">
=======
        <Jumbotron classNam="pr-0">
          <div className="container">
            <Row>
              <Col sm={2} classNam="p-0 m-0">
>>>>>>> 15df259f670468f1a4a99f5eefda5768b56ffef7
                <img
                  src={this.props.logo}
                  height="80"
                  width="80"
                  alt="Converter"
                />
                <strong>Converter</strong>
              </Col>
            </Row>
          </div>
        </Jumbotron> */}
      </React.Fragment>
    );
  }
}
export default Header;
