import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button,
  Jumbotron,
  NavbarToggler
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../shared/logo/Logo_for_page_title200x200.png";

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
        <Navbar dark className="navbar" expand="md">
          <NavbarBrand className="mr-auto navbar-default" href="/">
            <img src={Logo} height="40" width="40" alt="Converter" />{" "}
            <strong>Coverter</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"> Home</span>
                </NavLink>
              </NavItem>
              {/* <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-bell fa-lg"> What's New?</span>
              </NavLink>
            </NavItem> */}
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-info fa-lg"> About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"> Contact Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button outline>
                  <span className="fa fa-sign-in fa-lg" />
                  Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Converter</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
