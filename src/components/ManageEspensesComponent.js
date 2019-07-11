import React, { Component } from "react";
import {
  Col,
  Row,
  Table,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faMeh,
  faFrown,
  faSadTear,
  faSadCry,
  faSmileBeam,
  faSmile
} from "@fortawesome/free-solid-svg-icons";
import SelectExpense from "./SelectExpenseComponent";

class ManageExpenses extends Component {
  renderFace(sum, budget) {
    if (sum < budget) {
      return faSmile; //still some left-> if 20% left then ->faGrin and if found incom->faSmileBeam
    } else if (sum > budget) {
      return faFrown; //over spend budget or too overspend-> faSadTear
    } else {
      return faMeh; //a balanced expence
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Manage Expenses</h1>
        <Row>
          <Col sm={4}>
            <InputGroup className="budget">
              <InputGroupAddon addonType="prepend">Budget</InputGroupAddon>
              <Input placeholder="my budget" />
              <FontAwesomeIcon className="budget" icon={faSmile} size="2x" />
            </InputGroup>

            <span>Start budget:</span>
          </Col>
          <Col sm={{ size: 6, offset: 2 }}>
            <Button color="primary">Save</Button>{" "}
            <Button color="success">New</Button>{" "}
            <Button color="danger">Delete</Button>
          </Col>
        </Row>

        <Table hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Expense Type</th>
              <th>Amount</th>
              <th>Sum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Day 1</th>
              <td>
                Select Expense Type <SelectExpense />
              </td>
              <td>amount to spend</td>
              <td>sum</td>
            </tr>
            <tr>
              <th scope="row">Day 2</th>
              <td>Select Expense Type</td>
              <td>amount to spend</td>
              <td>sum</td>
            </tr>
            <tr>
              <th scope="row">Day 3</th>
              <td>Select Expense Type</td>
              <td>amount to spend</td>
              <td>sum</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default ManageExpenses;
