import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label
} from "reactstrap";
import { Control, Form, Errors, actions } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
    // this.props.postFeedback(
    //   values.firstName,
    //   values.lastName,
    //   values.telnum,
    //   values.email,
    //   values.agree,
    //   values.contactType,
    //   values.message
    // );
    // event.preventDefault();
  }
  render() {
    //in here we put code that we want to run every time the component is reredndered!!
    return (
      <div className="container-fluid">
        <h1>Lets Keep in Touch!</h1>

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

        <div className="form">
          <Row className="row-content">
            <Col xs={12}>
              <p>At Converter we believe in good and open communication.</p>
              <p> New opinions and feedbacks constantly improve our service.</p>

              <p>
                We are greatful for all those who help us in becoming the
                wonderful company that we are!
              </p>
              <br />
              <p>
                We would love to hear your opinion or answer any question you
                have!
              </p>
            </Col>
          </Row>
          <Row className="row-content">
            <Col>
              <h2>Our Contact Information</h2>
            </Col>
            <Col xs={12}>
              <address>
                <i className="fa fa-phone" />: +972 1234 5678
                <br />
                <i className="fa fa-fax" />: +972 1234 5678
                <br />
                <i className="fa fa-envelope" />:{" "}
                <a href="mailto:converter@gmail.com">converter@gmail.com</a>
              </address>
            </Col>

            <Col sm={11}>
              <div className="btn-group" role="group">
                <a
                  role="button"
                  className="btn btn-primary"
                  href="tel:+97212345678"
                >
                  <i className="fa fa-phone" /> Call
                </a>
                <a role="button" className="btn btn-info">
                  <i className="fa fa-skype" /> Skype
                </a>
                <a
                  role="button"
                  className="btn btn-success"
                  href="mailto:converter@gmail.com"
                >
                  <i className="fa fa-envelope-o" /> Email
                </a>
              </div>
            </Col>
          </Row>
          <Row className="row-content">
            <Col xs={12}>
              <h2>Send Us Your Feedback</h2>
            </Col>

            <Form
              model="feedback"
              className="col-12 col-md-9 offset-sm-1"
              onSubmit={values => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Col md={1}></Col>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={1}></Col>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />{" "}
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={1}></Col>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    validators={{
                      required,
                      validEmail
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: "Please enter a valid email"
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={1}></Col>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    row="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>{" "}
          {/*end of feedback*/}
        </div>
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
      </div> //end of container
    ); //end of return
  } //end of render
}

export default Contact;
