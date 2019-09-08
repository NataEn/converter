import React, { Component } from "react";
import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>Trip Calculator</h1>
        <Row>
          <Col sm={12}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Trip Calculator</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className="form">
          <Col>
            <p>Calculate your expenses</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Trip Calculator</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Calculator;
