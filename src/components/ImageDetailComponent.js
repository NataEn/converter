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
                <Link to="#">Image {this.props.image[0].name}</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Card key={this.props.image[0].id}>
          <CardImg
            top
            width="80%"
            src={this.props.image[0].image_url}
            alt={this.props.image[0].image_alt}
          />
          <small> attribute: {this.props.image[0].attribution}</small>
          <CardBody>
            <CardTitle>{this.props.image[0].name}</CardTitle>
            <ListGroup>
              <ListGroupItem>type: {this.props.image[0].type}</ListGroupItem>
              <ListGroupItem>value: {this.props.image[0].value}</ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>History</ListGroupItemHeading>
                <ListGroupItemText>
                  {this.props.image[0].notes}
                </ListGroupItemText>
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
                <Link to="#">Image {this.props.image[0].name}</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default ImageDetail;
