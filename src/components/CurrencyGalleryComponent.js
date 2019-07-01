import React, { Component } from "react";
import { Row, Col, Card, CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem } from "reactstrap";
import Currency from "./CurrencyComponent";
import { Link } from "react-router-dom";
import CORRENCY from '../shared/currenciesData'

function RenderCurrencyImage(image) {
  return (
    <Card>
      <Link to={`/gallery/`}>
      <CardImg width='100%' src={/} alt={image.name}>
        <CardImgOverlay>
          <CardTitle>The Currency</CardTitle>
          </CardImgOverlay>
      </Link>
    </Card>
  );
}

class CurrencyGallery extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <h1>Currency Gallery</h1>
            <RenderCurrencyImage gallery={/*file frome server*/}/>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CurrencyGallery;
