import React, { Component } from "react";
import { Nav, NavItem, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faHandHoldingUsd,
  faTh,
  faMapMarkedAlt,
  faSyncAlt,
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <Nav className="sidebar row">
        <Col className="sidebarCol" >
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/home">
            <FontAwesomeIcon icon={faSyncAlt} /> <span>Converter</span>
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/map">
            <FontAwesomeIcon icon={faMapMarkedAlt} /> <span>Map</span>
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/gallery">
            <FontAwesomeIcon icon={faTh} />
            {"  "}
            <span> Gallery</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/saving">
            <FontAwesomeIcon icon={faPiggyBank} /> <span>Saving Tips</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/tripCalculator">
            <FontAwesomeIcon icon={faCalculator} /> <span>Trip Calculator</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/manage">
            <FontAwesomeIcon icon={faHandHoldingUsd} /> <span>My Expenses</span>
          </NavLink>
        </NavItem>
        </Col>
      </Nav>
    );
  }
}

export default Sidebar;
