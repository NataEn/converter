import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faHandHoldingUsd,
  faTh,
  faMapMarkedAlt,
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <Nav className="sidebar" vertical>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/home">
            <FontAwesomeIcon icon={faSyncAlt} />
            <p>Currency Converter</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/map">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <p>Currency Map</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/gallery">
            <FontAwesomeIcon icon={faTh} />
            <p>Currency Gallery</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/saving">
            <FontAwesomeIcon icon={faPiggyBank} />
            <p>Saving Tips</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link nav-link-sidebar" to="/managesaving">
            <FontAwesomeIcon icon={faHandHoldingUsd} /> <p>Manage Expenses</p>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default Sidebar;
