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
  faColumns,
  faPenAlt,
  faPen,
  faPencilAlt
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
    this.addInnerSelectRows = this.addInnerSelectRows.bind(this);
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
    this.addSelectInnerRows(3);
  };
  addExpenseDescription = (number, selected) => {
    let DescriptionInnerRow = [];
    if (number) {
      console.log("from inner expense row" + selected[number - 1].notes);

      while (number > 0) {
        DescriptionInnerRow.push(
          <Col className="input-group expense-description" key={number}>
            <lable>
              <i class="fas fa-pencil-alt prefix" />
            </lable>
            <textarea
              size="small"
              className="form-control"
              aria-label="With textarea"
              cols="5"
              rows="3"
              wrap="off"
            >
              {selected[number - 1].notes}
            </textarea>
          </Col>
        );
        number--;
      }
      return DescriptionInnerRow;
    } else {
      return <p>didn't find description</p>;
    }
  };
  addInnerSelectRows = (number, selected) => {
    let InnerRow = [];
    if (number) {
      while (number > 0) {
        //console.log("from inner row" + selected[number - 1].expense_type);
        InnerRow.push(
          <React.Fragment key={number}>
            <Col md={12}>
              <SelectExpense
                onChange={this.expenseTypeSelect}
                onClick={this.addInnerSelectRows}
                defaultValue={selected[number - 1].expense_type}
              />
            </Col>
            <FontAwesomeIcon
              className="budget"
              icon={faPencilAlt}
              size="0.5x"
            />
            <br />
          </React.Fragment>
        );
        number--;
      }
    }
    return InnerRow;
  };
  addRows = table => {
    let tablerows = [];

    for (let [key, value] of Object.entries(EXPENSE[table].rows)) {
      //console.log(`${key}: ${value}`);
      //console.log("from adding rows" + JSON.stringify(value.expenses));
      tablerows.push(
        <tr key={value}>
          <th scope="row">
            {value.date}{" "}
            <Button color="light" onClick={this.handleAddingSelectExpense}>
              Add Expense
            </Button>
          </th>
          <td>
            {this.addInnerSelectRows(value.expenses.length, value.expenses)}
          </td>
          <td>
            {this.addExpenseDescription(value.expenses.length, value.expenses)}
          </td>
          <td>amount to spend</td>
          <td>sum</td>
        </tr>
      );
    }

    return tablerows;
  };
  renderExpenseTable = () => {
    let tables = [];
    for (let [key, value] of Object.entries(EXPENSE)) {
      //console.log(key + " is of table" + EXPENSE[key].tableName);
      tables.push(
        <React.Fragment>
          <div className="expense-table">
            <h4>{EXPENSE[key].tableName}</h4>{" "}
            <Row>
              <Col sm={4}>
                <InputGroup
                  className="budget"
                  onChange={alert("value has been change")}
                >
                  <InputGroupAddon addonType="prepend">Budget</InputGroupAddon>
                  <Input
                    placeholder="my budget"
                    value={EXPENSE[key].budget}
                    onChange={alert("value has been change")}
                  />
                  <FontAwesomeIcon
                    className="budget"
                    icon={faSmile}
                    size="2x"
                  />
                </InputGroup>

                <span>Start budget:</span>
              </Col>
              <Col sm={{ size: 6, offset: 2 }}>
                <Button color="light">Save</Button>{" "}
                <Button color="light">New</Button>{" "}
                <Button color="light">Delete</Button>
              </Col>
              <Col sm={12}>
                <Table hover>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Expense Type</th>
                      <th>Expense Description</th>
                      <th>Amount</th>
                      <th>Sum</th>
                    </tr>
                  </thead>
                  <tbody>{this.addRows(key)}</tbody>
                </Table>
              </Col>
            </Row>
          </div>{" "}
          <br />
        </React.Fragment>
      );
    }
    return tables;
  };

  expenseTypeSelect = (name, value) => {
    alert("the expense" + name + "was selected");
  };
  render() {
    return (
      <div className="container">
        <h1>Manage Expenses</h1>
        <div className="tableContainer">
          {" "}
          <Row>
            <Col sm={{ size: 11, offset: 1 }}>{this.renderExpenseTable()}</Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default ManageExpenses;
