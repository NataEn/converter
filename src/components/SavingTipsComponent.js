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
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardTitle,
  CardText,
  CardFooter,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import { Link } from "react-router-dom";

import { Control, LocalForm, Errors } from "react-redux-form";
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

function RenderTip({ tips, addTip }) {
  if (tips != null) {
    return (
      <React.Fragment>
        {tips.map(tip => {
          return (
            <Col sm={6} xs={12} md={4} className="p-4">
              <div className="bg-info rounded">
                {" "}
                <Toast className="p-2 rounded">
                  <ToastHeader className="text-center rounded" tag="h3">
                    {tip.title}
                  </ToastHeader>
                  <ToastBody className="my-2 text-justify">{tip.tip}</ToastBody>
                  <CardFooter className="font-italic font-weight-light text-secondary text-right">
                    {tip.author} {tip.date}
                  </CardFooter>
                </Toast>
              </div>
            </Col>
          );
        })}
        <TipForm addTip={addTip} />
      </React.Fragment>
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
      <div className="container">
        <Row className="form-group d-flex justify-content-center">
          <Col xs={12} md={6}>
            <Button
              outline
              onClick={this.toggleModal}
              className="bg-success text-white"
            >
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
                  <Control.textarea
                    model=".tip-title"
                    id="tip-title"
                    name="tip-title"
                    row="1"
                    className="form-control"
                    placeholder="Title . . ."
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={10}>
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
  return (
    <div className="container-fluid">
      <h1>Saving Tips</h1>
      <Row>
        <Col sm={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Saving Tips</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <div className="form">
        <Row>
          <Col xs={12}>
            <p className=" p-4">
              Saving money is all about making a new life routine. <br />
              Say you already have one, but do you stick to it? <br /> A well
              planned routine embraces simple and realistic steps that easily
              become part of your life- without even noticing them. Follow these
              next tips to gradually build a new routine and decrease your
              expenses.
            </p>
          </Col>

          <ListGroup className="d-flex align-items-center p-4">
            <h3 className="font-weight-bold ">Lets Start Saving!</h3>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading tag="h4">
                Record Your Expenses
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                width="40%"
                alt="record image"
                class="rounded float-left pr-2 mr-2"
              />
              <ListGroupItemText className="text-left">
                When writting down what you spend on you become aware of your
                expenses and lifestyle. This is the starting point that helps
                keep track of your money and searching for better/cheeper
                solutions for your needs. For example- if you have coffee and a
                simple roasted bread for breakfast- then often you could use the
                housing facilities for that- no need to go to a restourant.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading tag="h4">
                Make a Budget
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/1288483/pexels-photo-1288483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                width="40%"
                alt="record image"
                class="rounded float-left pr-2 mr-2"
              />
              <ListGroupItemText>
                decide how much are you willing to spend on your vacation.
                Make-up a list of all the expected expenses (activities,
                accomodations, flights, shopping etc..) and research thier
                average costs. To make it easier on you we came up with a greate{" "}
                <Link to="tripCalculator">Trip Calculator</Link> especially
                designed for that!
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading tag="h4">
                Nonessential Expenses-OUT!
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/850216/pexels-photo-850216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
                0"
                width="40%"
                alt="record image"
                class="rounded float-left pr-2 mr-2"
              />
              <ListGroupItemText>
                Identifing nonessentioal expenses is very helpfull. At this
                point you should ask yourself "What is not so important to
                have/spend on/do..." This is true for the daily routine and when
                planing your vacation budget. Specifically for trips- there are
                lots of free activities you could do. <br /> Yes, of-course
                sometimes it could be tricky and impare your vacation lifestyle.
                There are limits. But as you think about them remember that it's
                all about your habits.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading tag="h4">
                Set a Goal/s to Save
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/70459/darts-dart-board-bull-s-eye-game-70459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                width="40%"
                alt="record image"
                class="rounded float-left pr-2 mr-2"
              />
              <ListGroupItemText>
                A vacation trip is an example of an excellent goal! It gets even
                better if it is a serprise trip for someone's birthday...
                <br />
                Sometimes, when we don't think about our needs it becomes easier
                to make the efforts.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading tag="h4">
                Set a Time Span for Every Goal
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/1178683/pexels-photo-1178683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
                0"
                width="40%"
                alt="record image"
                class="rounded float-left pr-2 mr-2"
              />

              <ListGroupItemText>
                Set the time span of your Goal- short or long term goal? keep
                track of your progression in acheeving them or else you'll just
                forget...
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading tag="h4">
                Prioritize Your Goals
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/1204652/pexels-photo-1204652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                width="40%"
                alt="record image"
                class="rounded float-left pr-2 mr-2"
              />
              <ListGroupItemText>
                Basically, it is best to have your short-term goals with higher
                priority, since they are usually much easier to track and
                acheave.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading tag="h4">
                Regularly Check Your Saving Progress
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/1893527/pexels-photo-1893527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                width="40%"
                alt="record image"
                class="rounded float-left pr-2 mr-2"
              />
              <ListGroupItemText>
                Schedule to check your saving progress according to the time
                span of your goal. But don't make it hard on yourself! Use
                google-calender appointments or set some reminders in your
                mobile-phone. You'll get the hang of it, you'll see.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem className="rounded">
              <ListGroupItemHeading
                tag="h4"
                className="font-weight-bold text-center"
              >
                Enjoy Your Vacation! You Earned It!
              </ListGroupItemHeading>
              <img
                src="https://images.pexels.com/photos/1537168/pexels-photo-1537168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                width="70%"
                alt="record image"
                class="rounded mx-auto d-block"
              />
            </ListGroupItem>
          </ListGroup>
        </Row>
        <Row>
          <Col xs={12} className="mt-2">
            <h3 className="font-weight-bold">Travelers' Tips</h3>
          </Col>

          <RenderTip tips={props.tips} addTip={props.addTip} />
        </Row>
      </div>
      <Row>
        <Col sm={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>saving Tips</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </div>
  );
};
export default SavingTips;
