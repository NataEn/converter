import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";
class SavingTips extends Component {
  render() {
    return (
      <div className="container">
        <h1>Saving Tips</h1>
        <p className="textLeft">
          Saving money is all about making a new life routine. Say you already
          have one, but do you stick to it? <br />A well planned routine
          embraces simple and realistic steps that easily become part of your
          life- without even noticing them. <br />
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
                <li>
                  Set the time span of your Goal- short or long term goal?
                </li>
                <li> Prioritize your Goals </li>
                <li>
                  Can you Automate your Saving? look for (free) tools or bank
                  services
                </li>
                <li>Check your Saving progress</li>
              </ul>
            </ListGroupItemText>
            <Button>Add a Life Tip</Button>
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
  }
}
export default SavingTips;
