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
      <React.Fragment className="container">
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/gallery">Currency Image Gallery</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Image {this.props.image.name}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Card key={this.props.image.id}>
          {this.props.image.image_url_1 ? (
            <React.Fragment>
              <CardImg
                top
                src={this.props.image.image_url_1}
                alt={this.props.image.image_alt_1}
              />
              <CardImg
                top
                src={this.props.image.image_url_2}
                alt={this.props.image.image_alt_2}
              />
            </React.Fragment>
          ) : (
            <CardImg
              top
              src={this.props.image.image_url}
              alt={this.props.image.image_alt}
            />
          )}
          <small> Attribute: {this.props.image.attribution}</small>
          <CardBody>
            <CardTitle>{this.props.image.name}</CardTitle>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Type: {this.props.image.type}
                </ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Value: {this.props.image.value}
                </ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading className="font-weight-bold">
                  History
                </ListGroupItemHeading>
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
                Image {this.props.image.name}
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default ImageDetail;
