import React, { Component } from "react";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={12}>
            <h1>About Converter</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>About Converter</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        <Row className="form">
          <Col xs={12}>
            <p className="text-justify">
              Converter is a web application developed for setting and managing
              costs of activities. Wether you are planing an indoor or outdoor
              activity this is a good application to calculate its cost.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Breadcrumb className="mt-4">
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>About Converter</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}
export default About;
