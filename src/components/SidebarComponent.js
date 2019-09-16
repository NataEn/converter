import React, { Component } from "react";
import { Nav, NavItem, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faHandHoldingUsd,
  faTh,
  faSyncAlt,
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <Nav className="sidebar row ">
        <Col className="flex-md-column d-flex justify-content-center">
          <NavItem>
            <NavLink className="nav-link nav-link-sidebar" to="/home">
              <FontAwesomeIcon icon={faSyncAlt} />{" "}
              <span className="sidebarSpan">Converter</span>
            </NavLink>
          </NavItem>
          {/* <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/map">
            <FontAwesomeIcon icon={faMapMarkedAlt} /> <span className="sidebarSpan">Map</span>
          </NavLink>
        </NavItem> */}
          <NavItem>
            <NavLink className="nav-link nav-link-sidebar" to="/gallery">
              <FontAwesomeIcon icon={faTh} />
              {"  "}
              <span className="sidebarSpan"> Gallery</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link nav-link-sidebar" to="/saving">
              <FontAwesomeIcon icon={faPiggyBank} />{" "}
              <span className="sidebarSpan">Saving Tips</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link nav-link-sidebar" to="/tripCalculator">
              <FontAwesomeIcon icon={faCalculator} />{" "}
              <span className="sidebarSpan">Calculator</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link nav-link-sidebar" to="/manage">
              <FontAwesomeIcon icon={faHandHoldingUsd} />{" "}
              <span className="sidebarSpan">Expenses</span>
            </NavLink>
          </NavItem>
        </Col>
      </Nav>
    );
  }
}

export default Sidebar;
