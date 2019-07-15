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
  faSmile,
  faColumns
} from "@fortawesome/free-solid-svg-icons";
import SelectExpense from "./SelectExpenseComponent";
import { EXPENSE } from "../shared/ExpenseData";

class ManageExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablerows: 2,
      tableColumns: 4,
      selectRows: 1
    };
    this.addInnerRows = this.addInnerRows.bind(this);
    this.addRows = this.addRows.bind(this);
    this.renderExpenseTable = this.renderExpenseTable.bind(this);
  }

  renderFace(sum, budget) {
    if (sum < budget) {
      return faSmile; //still some left-> if 20% left then ->faGrin and if found incom->faSmileBeam
    } else if (sum > budget) {
      return faFrown; //over spend budget or too overspend-> faSadTear
    } else {
      return faMeh; //a balanced expence
    }
  }
  handleAddingSelectExpense = event => {
    this.addInnerRows(3);
  };

  addInnerRows = (number, selected) => {
    let InnerRow = [];
    if (number) {
      while (number > 0) {
        console.log("from inner row" + selected[number - 1].expense_type);
        InnerRow.push(
          <React.Fragment key={1}>
            <Col md={8}>
              <SelectExpense
                onChange={this.expenseTypeSelect}
                onClick={this.addInnerRows}
                defaultValue={selected[number - 1].expense_type}
              />
            </Col>
            <div className="input-group expenseDescription">
              <textarea
                size="small"
                className="form-control"
                aria-label="With textarea"
              />
            </div>
            <br />
          </React.Fragment>
        );
        number--;
      }
    }
    return InnerRow;
  };
  addRows = () => {
    let tablerows = [];

    for (let [key, value] of Object.entries(EXPENSE.table_A.rows)) {
      console.log("from row loop" + value.date);
      console.log(`${key}: ${value}`);
      console.log("from adding rows" + JSON.stringify(value.expenses));
      tablerows.push(
        <tr key={value}>
          <th scope="row">
            {value.date}{" "}
            <Button color="light" onClick={this.handleAddingSelectExpense}>
              Add Expense
            </Button>
          </th>
          <td>{this.addInnerRows(value.expenses.length, value.expenses)}</td>
          <td>amount to spend</td>
          <td>sum</td>
        </tr>
      );
    }

    return tablerows;
  };
  renderExpenseTable = () => {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Expense Type</th>
            <th>Amount</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>{this.addRows()}</tbody>
      </Table>
    );
  };

  expenseTypeSelect = (name, value) => {
    alert("the expense" + name + "eas selected");
  };
  render() {
    return (
      <div className="container">
        <h1>Manage Expenses</h1>
        <div className="tableContainer">
          {" "}
          <h4>{EXPENSE.table_A.tableName}</h4>
          <Row>
            <Col sm={4}>
              <InputGroup
                className="budget"
                onChange={alert("value has been change")}
              >
                <InputGroupAddon addonType="prepend">Budget</InputGroupAddon>
                <Input
                  placeholder="my budget"
                  value={EXPENSE.table_A.budget}
                  onChange={alert("value has been change")}
                />
                <FontAwesomeIcon className="budget" icon={faSmile} size="2x" />
              </InputGroup>

              <span>Start budget:</span>
            </Col>
            <Col sm={{ size: 6, offset: 2 }}>
              <Button color="light">Save</Button>{" "}
              <Button color="light">New</Button>{" "}
              <Button color="light">Delete</Button>
            </Col>
          </Row>
          {this.renderExpenseTable()}
        </div>
      </div>
    );
  }
}
export default ManageExpenses;
