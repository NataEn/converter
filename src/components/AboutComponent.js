import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class About extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={12}>
            <h1>About Converter</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-justify">
              Converter is a web application developed for{" "}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
export default About;
