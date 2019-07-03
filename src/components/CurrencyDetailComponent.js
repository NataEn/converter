import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class CurrencyDetail extends Component {
  render() {
    console.log("from currency detail" + JSON.stringify(this.props.currency));
    return (
      <Card>
        <CardImg
          top
          width="80%"
          src={this.props.currency[0].image_url}
          alt={this.props.currency[0].image_alt}
        />
        <small> attribute: {this.props.currency[0].attribution}</small>
        <CardBody>
          <CardTitle>{this.props.currency[0].name}</CardTitle>
          <ListGroup>
            <ListGroupItem>type: {this.props.currency[0].type}</ListGroupItem>
            <ListGroupItem>value: {this.props.currency[0].value}</ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>History</ListGroupItemHeading>
              <ListGroupItemText>
                {this.props.currency[0].notes}
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}
export default CurrencyDetail;
