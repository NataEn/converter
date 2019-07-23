import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
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
    console.log("from currency detail" + JSON.stringify(this.props.image));
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/gallery">Currency Image Gallery</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="#">Image {this.props.image.name}</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Card key={this.props.image.id}>
          <CardImg
            top
            width="80%"
            src={this.props.image.image_url}
            alt={this.props.image.image_alt}
          />
          <small> attribute: {this.props.image.attribution}</small>
          <CardBody>
            <CardTitle>{this.props.image.name}</CardTitle>
            <ListGroup>
              <ListGroupItem>type: {this.props.image.type}</ListGroupItem>
              <ListGroupItem>value: {this.props.image.value}</ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>History</ListGroupItemHeading>
                <ListGroupItemText>{this.props.image.notes}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/gallery">Currency Image Gallery</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link to="#">Image {this.props.image.name}</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default ImageDetail;
