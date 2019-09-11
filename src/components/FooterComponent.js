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
    <React.Fragment className="container mr-0 footer ">
      <Row className="footer-xs d-flex justify-content-center mt-2">
        <Col
          xs={12}
          sm={4}
          md={3}
          className="d-flex flex-column justify-content-center"
        >
          <h4>Navigate</h4>
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
        </Col>
        <Col
          xs={12}
          sm={4}
          md={3}
          className="d-flex flex-column justify-content-center"
        >
          <h4 className="footer align-self-center">Useful Links</h4>

          <ul className="list-unstyled">
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
        </Col>
        <Col
          xs={12}
          sm={4}
          md={3}
          className="d-flex flex-column justify-content-center"
        >
          <h4 className="footer align-self-center">Contact Us</h4>

          <ul className="list-unstyled ">
            <li>
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
            </li>

            <li className="d-flex pt-2 justify-content-center">
              <button className="btn terms ">Terms Of Use</button>
            </li>
          </ul>
        </Col>
      </Row>
      <hr className="footer" />
      <Row>
        <Col xs={{ size: 11, offset: 1 }} className="rights">
          <p>© All rights reserved to Converter 2019</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};
