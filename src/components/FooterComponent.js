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
    <React.Fragment className="container-fluid mr-0 footer">
      <Row className="footer-xs">
        <Col xs={0} sm={1}></Col>
        <Col xs={12} sm={3} className="pt-2">
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
        <Col xs={12} sm={{ size: 4, order: 3 }}>
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
        <Col xs={12} sm={{ size: 3, order: 4 }}>
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
        <Col xs={{ size: 1, order: 1 }}></Col>
        <Col xs={{ size: 11, order: 2 }} className="rights">
          <p>© All rights reserved to Converter 2019</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};
