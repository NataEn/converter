import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

class ImageDetail extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/gallery">Currency Gallery</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{this.props.image.name}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Card
          key={this.props.image.id}
          className="form d-flex justify-content-between"
        >
          <div className="col col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <CardImg
              className="bigBill"
              src={this.props.image.image_url_1}
              alt={this.props.image.image_alt_1}
            />
            <footer>
              <small> {this.props.image.image_alt_1}</small>
            </footer>
            <CardImg
              className="bigBill"
              src={this.props.image.image_url_2}
              alt={this.props.image.image_alt_2}
            />
            <footer>
              <small> {this.props.image.image_alt_2}</small>
            </footer>
            <small className="p-2 imageattribute font-italic  text-secondary  text-left">
              ATTRIBUTE:
              {this.props.image.attribution}
            </small>
          </div>
          <CardBody className="col col-12 d-flex flex-column justify-content-center">
            <CardHeader tag="h3">{this.props.image.name}</CardHeader>
            <ListGroup>
              <ListGroupItem className="border bg-light">
                <ListGroupItemHeading>
                  <strong>Type:</strong> {this.props.image.type}
                </ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem className="border bg-light">
                <ListGroupItemHeading>
                  <strong>Value:</strong> {this.props.image.value}
                </ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem className="border bg-light">
                <ListGroupItemHeading className="font-weight-bold">
                  History
                </ListGroupItemHeading>
                <ListGroupItemText>
                  <p className="text-justify">{this.props.image.notes}</p>
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
        <Row>
          <Col>
            <Breadcrumb className="mt-4">
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/gallery">Currency Gallery</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.image.name}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ImageDetail;
