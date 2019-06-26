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
            <img src={Logo} height="30" width="30" alt="Converter" />{" "}
            <strong>Coverter</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-home fa-lg" /> Home
                </NavLink>
              </NavItem>
              {/* <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-bell fa-lg"> What's New?</span>
              </NavLink>
            </NavItem> */}
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-info fa-lg" /> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <i className="fa fa-address-card fa-lg" /> Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <Button className="login" outline>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header row-no-gutters">
              <div className="col-2 offset-1">
                <img src={Logo} height="80" width="80" alt="Converter" />
              </div>
              <div className="col-6 col-sm-3 col-offset-right">
                <h1 className='header-align-middle'>Converter</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
