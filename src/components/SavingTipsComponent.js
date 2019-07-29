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
  Col
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
function RenderComment({ comments, addComment }) {
  if (comments != null) {
    return (
      <div className="col-md-7 col-sm-12">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <li className="list-unstyled" key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}</p>
              </li>
            );
          })}
        </ul>
        <CommentForm addComment={addComment} />
      </div>
    );
  } else {
    return (
      <div>
        <h4>No Comments Available</h4>
        <CommentForm addComment={addComment} />
      </div>
    );
  }
} //end of RenderComment function-component
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleSubmitComment(values) {
    this.toggleModal();
    this.props.addComment(values.author, values.comment);
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
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmitComment(values)}>
              {/* <Row className="form-group">
                <Col md={10}>
                  <Label htmlFor="rating">Rating</Label>
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
              </Row> */}

              <Row className="form-group">
                <Col md={10}>
                  <Label htmlFor="name">Your Name</Label>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Your Name"
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
                  <Label htmlFor="comment" className="col-12">
                    Comment
                  </Label>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    row="12"
                    className="form-control"
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
  console.log("from saving tips the addComment is: " + props.addComment);
  return (
    <div className="container">
      <h1>Saving Tips</h1>
      <p className="textLeft">
        Saving money is all about making a new life routine. Say you already
        have one, but do you stick to it? <br />A well planned routine embraces
        simple and realistic steps that easily become part of your life- without
        even noticing them. <br />
        Follow these next tips to gradually build a new routine and decrease
        your expenses.
      </p>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading> Life Tips</ListGroupItemHeading>
          <ListGroupItemText>
            <ul className="textLeft">
              <li>
                <h6>Record Your Expenses</h6>
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
          <Button>Add a Life Tip</Button>
          <RenderComment
            comments={props.comments}
            addComment={props.addComment}
          />
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading> Traveling Tips</ListGroupItemHeading>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading> Tips on the Spot</ListGroupItemHeading>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
export default SavingTips;
