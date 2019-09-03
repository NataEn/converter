import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  Row,
  Col,Breadcrumb,BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

import { Control, LocalForm, Errors } from "react-redux-form";
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

function RenderTip({ tips, addTip }) {
  if (tips != null) {
    return (
      <Col md={10} sm={12}>
        <h4>Tips</h4>
        <ul className="list-unstyled">
          {tips.map(tip => {
            return (
              <li className="list-unstyled" key={tip.id}>
                <p>{tip.tip}</p>
                <p>
                  --{tip.author} {tip.date}
                </p>
              </li>
            );
          })}
        </ul>
        <TipForm addTip={addTip} />
      </Col>
    );
  } else {
    return (
      <div>
        <h4>No Tips Available</h4>
        <TipForm addTip={addTip} />
      </div>
    );
  }
} //end of RenderTip function-component

class TipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitTip = this.handleSubmitTip.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleSubmitTip(values) {
    this.toggleModal();
    this.props.addTip(values.author, values.tip);
  }
  render() {
    return (
      <div>
        <Row className="form-group">
          <Col md={{ size: 6, offset: 2 }}>
            <Button outline onClick={this.toggleModal}>
              <span className="fa fa-pencil fa-lg" />
              &nbsp; Add a Life Tip
            </Button>
          </Col>
        </Row>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Share Your Tips</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmitTip(values)}>
              <Row className="form-group">
                <Col md={10}>
                  <Label htmlFor="rating">Rate the addTip</Label>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={10}>
                  <Label htmlFor="name">Your Name</Label>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="My Name is . . ."
                    className="form-control"
                    validators={{
                      required,
                      maxLength: maxLength(10),
                      minLength: minLength(3)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "please state your name",
                      minLength: " name should be greater then 3",
                      maxLength: " name should be less then 10 "
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={10}>
                  <Label htmlFor="tip" className="col-12">
                    Your Tip
                  </Label>
                  <Control.textarea
                    model=".tip"
                    id="tip"
                    name="tip"
                    row="12"
                    className="form-control"
                    placeholder="My Tip . . ."
                  />
                </Col>
              </Row>
              <Col md={10}>
                <Button type="submit" value="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const SavingTips = props => {
  console.log("from saving tips the addTip is: " + props.addTip);
  return (
    <div className="container">
     
      <h1>Saving Tips</h1>
      <Row>
        <Col sm={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        </Row>
      <Row className="form">
      <p className="textLeft">
        Saving money is all about making a new life routine. Say you already
        have one, but do you stick to it? <br />A well planned routine embraces
        simple and realistic steps that easily become part of your life- without
        even noticing them. <br />
        Follow these next tips to gradually build a new routine and decrease
        your expenses.
      </p>
      <ListGroup >
        <ListGroupItem>
          <ListGroupItemHeading> Life Tips</ListGroupItemHeading>
          <ListGroupItemText>
            <ul className="textLeft">
              <li>
                <h5>Record Your Expenses</h5>
                <p>Some explanation</p>
              </li>
              <br />
              <li>
                <h6>Make a Budget</h6>
                <p>Some explanation</p>
              </li>
              <br />
              <li>Identify Nonessential Expenses</li>
              <li>Set a Goal/s to Save </li>
              <li>Set the time span of your Goal- short or long term goal?</li>
              <li> Prioritize your Goals </li>
              <li>
                Can you Automate your Saving? look for (free) tools or bank
                services
              </li>
              <li>Check your Saving progress</li>
            </ul>
          </ListGroupItemText>

          <RenderTip tips={props.tips} addTip={props.addTip} />
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading> Traveling Tips</ListGroupItemHeading>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading> Tips on the Spot</ListGroupItemHeading>
        </ListGroupItem>
      </ListGroup>
      </Row>
      <Row>
        <Col sm={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        </Row>
    </div>
  );
};
export default SavingTips;
