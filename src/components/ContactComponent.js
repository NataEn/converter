import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Row, Col } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    //console.log("Current State is: " + JSON.stringify(values));
    alert(
      values.firstname[0].toUpperCase() +
        values.firstname.slice(1) +
        " " +
        values.lastname[0].toUpperCase() +
        values.lastname.slice(1) +
        ", your feedback: " +
        JSON.stringify(values.message) +
        " is submited. Thank you!"
    );
    this.props.resetFeedbackForm();
  }
  render() {
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
          <Row className="row-content d-flex justify-content-center">
            <Col xs={12}>
              <h2>Our Contact Information</h2>
            </Col>

            <Col xs={4}>
              <ul>
                <li className="contactinfo">
                  <i className="fa fa-phone" />: +972 1234 5678
                </li>
                <li className="contactinfo">
                  <i className="fa fa-fax" />: +972 1234 5678
                </li>
                <li className="contactinfo">
                  <i className="fa fa-envelope" />:{" "}
                  <a href="mailto:converter@gmail.com">converter@gmail.com</a>
                </li>
              </ul>
            </Col>

            <Col sm={12}>
              <div className="btn-group" role="group">
                <a
                  role="button"
                  className="btn btn-primary"
                  href="tel:+97212345678"
                >
                  <i className="fa fa-phone" /> Call
                </a>
                <a
                  role="button"
                  className="btn btn-info"
                  href="https://www.skype.com/he/"
                >
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
          <Row className="row-content d-flex justify-content-center">
            <Col xs={12}>
              <h2>Send Us Your Feedback</h2>
            </Col>

            <Form
              model="feedback"
              className="col-12 col-md-9 offset-sm-1"
              onSubmit={values => this.handleSubmit(values)}
            >
              <Row className="form-group ">
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
                      required: "Required! ",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
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
                      required: "Required! ",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
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
                      required: "Required! ",
                      validEmail: "Please enter a valid email"
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
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

              <Col xs={10} className="d-flex justify-content-center">
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </Form>
          </Row>{" "}
          {/*end of feedback*/}
        </div>
        <Row>
          <Col sm={12}>
            <Breadcrumb className="mt-4">
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
