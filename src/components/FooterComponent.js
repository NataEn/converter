import React from "react";
import { SocialIcon } from "react-social-icons";
import {Nav} from 'react-social-icons'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";

export const Footer = props => {
  return (
    <div className="container footer">
      <div className="row align-items-center">
        <div className="col-3 col-xs-2 col-auto">
          <h4>Navigate</h4>
          <ul className="list-unstyled">
            <li>
              <NavLink className="nav-link" to="/home">
                <FontAwesomeIcon icon={faHome} /> {"  "}Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link " to="/about">
                <FontAwesomeIcon icon={faInfo} />
                {"  "} About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                <FontAwesomeIcon icon={faAddressCard} />
                {"  "}
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-3 col-xs-2 col-auto">
          <h4>Useful Links</h4>
          <ul className="list-unstyled">
            <li>Traveling</li>
            <li>Finance</li>
            <li>Currencies</li>
          </ul>
        </div>
        <div className="col-3 col-xs-2 col-auto">
          <h4>Contact Us</h4>
          <a
            className="btn btn-social-icon btn-google"
            href="mailto:converter@example.com"
          >
            <i className="fa fa-google-plus" />
          </a>
          <a
            className="btn btn-social-icon btn-linkedin"
            href="www.linkedin.com"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a className="btn btn-social-icon btn-foursquare" href="tel:1234567">
            <i className="fa fa-phone fa-lg" />
          </a>
          <a
            className="btn btn-social-icon btn-facebook"
            href="http://www.facebook.com/profile.php?id="
          >
            <i className="fa fa-facebook" />
          </a>
        </div>
        <div className="col-3">
          <a type="button" className="terms btn btn-success" href="./">
            <span>Terms of Use</span>
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-10">
          <p>© All rights reserved to Converter 2019</p>
        </div>
      </div>
    </div>
  );
};
