import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faHandHoldingUsd,
  faTh,
  faMapMarkedAlt,
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";

class Sidebar extends Component {
  render() {
    return (
      <Nav className="sidebar" vertical>
        <NavItem>
          <NavLink className="navlink" href="#">
            <FontAwesomeIcon icon={faSyncAlt} />
            <p>Currency Converter</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <p>Currency Map</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#">
            <FontAwesomeIcon icon={faTh} />
            <p>Currency Gallery</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#">
            <FontAwesomeIcon icon={faPiggyBank} />
            <p>Saving Tips</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="navlink" href="#">
            <FontAwesomeIcon icon={faHandHoldingUsd} /> <p>Manage Expenses</p>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default Sidebar;
