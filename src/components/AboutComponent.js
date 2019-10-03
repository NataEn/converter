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
              activity this is a good application to calculate its costs.
            </p>
            <p className="text-justify">
              In the <Link to="/tripCalculator">Calculator</Link> section there
              is a table that can help you list your expenses and calculate the
              total sum. every line is editable and editing the costs triggers
              an automatic sum calculation in the bottom of the page. To save
              your data you can simply download the table in a csv format that
              you could easily open in every text editin program like{" "}
              <i>'Notepad'</i> and <i>'Microsoft Excell'</i>. <br />
              You may add and remove lines as you please.
            </p>
            <p className="text-justify">
              We are more than happy to recieve your feedback at the{" "}
              <Link to="/contact">Contact</Link> section.
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
