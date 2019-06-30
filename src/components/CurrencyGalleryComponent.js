import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Currency from "./CurrencyComponent";

class CurrencyGallery extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <h1>Currency Gallery</h1>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CurrencyGallery;
