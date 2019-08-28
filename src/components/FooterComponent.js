import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faAddressCard,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { thumbsup } from "@fortawesome/free-regular-svg-icons";
import { Row, Col } from "reactstrap";

export const Footer = props => {
  return (
    <div className="container footer pl-3">
      <Row className="pt-2 pl-3">
        <Col sm={3}>
          <Row>
            <h4>Navigate</h4>
            <br />
          </Row>
          <Row>
            <ul className="list-unstyled ">
              <li>
                <Link className="nav-link " to="/home">
                  <FontAwesomeIcon icon={faHome} /> {"  "}Home
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/about">
                  <FontAwesomeIcon icon={faInfo} />
                  {"  "} About
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/contact">
                  <FontAwesomeIcon icon={faAddressCard} />
                  {"  "}
                  Contact
                </Link>
              </li>
            </ul>
          </Row>
        </Col>
        <Col sm={3}>
          <Row>
            <h4>Useful Links</h4>
            <br />
          </Row>
          <Row>
            <ul className="list-unstyled d-flex flex-column justify-content-start">
              <li>
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faCheck} />
                  {"  "}
                  Traveling
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faCheck} />
                  {"  "}
                  Finance
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faCheck} />
                  {"  "}
                  Currencies
                </Link>
              </li>
            </ul>
          </Row>
        </Col>
        <Col sm={3}>
          <Row>
            <h4>Contact Us</h4>
            <br />
          </Row>

          <Row className="inline-block">
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
            <a
              className="btn btn-social-icon btn-foursquare"
              href="tel:1234567"
            >
              <i className="fa fa-phone fa-lg" />
            </a>
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/profile.php?id="
            >
              <i className="fa fa-facebook" />
            </a>
          </Row>
          <Row>
            <button className="btn terms">Terms Of Use</button>
          </Row>
        </Col>
      </Row>
      <hr className="footer" />
      <Row>
        <Col sm={12} className="rights">
          <p>© All rights reserved to Converter 2019</p>
        </Col>
      </Row>
    </div>
  );
};
