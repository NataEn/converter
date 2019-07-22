import React, { Component } from "react";
import {
  Col,
  Row,
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
import {
  EXPENSE,
  calculateSpendSum,
  spenedInATable,
  addRow
} from "../shared/ExpenseData";

class ManageExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablerows: 2,
      tableColumns: 4,
      textareaVisible: []
    };
    this.addInnerSelectRows = this.addInnerSelectRows.bind(this);
    this.addRows = this.addRows.bind(this);
    this.renderExpenseTable = this.renderExpenseTable.bind(this);
    // this.toggleTextarea = this.toggleTextarea.bind(this);
  }
  //buttons:
  handleAddingRow = event => {
    console.log(event);
    //addRow(tablKey);
    console.log("rows added:" + JSON.stringify(EXPENSE.table_A.rows));
  };

  renderFace(sum, budget) {
    let face = {};
    console.log("from render face sum is" + sum + "budget is" + budget);
    if (sum < budget) {
      face = (
        <FontAwesomeIcon
          className="good"
          style={{ color: "rgba(86, 169, 1825, 1)" }}
          icon={faSmile}
          size="3x"
          data-toggle="tooltip"
          data-placement="left"
          title="Yey! You still have some money to spend!"
        />
      );
      //still some left-> if 20% left then ->faGrin and if found incom->faSmileBeam
    } else if (sum > budget) {
      face = (
        <FontAwesomeIcon
          className="bad"
          style={{ color: "rgba(221, 43,73, 1)" }}
          icon={faFrown}
          size="3x"
          data-toggle="tooltip"
          data-placement="left"
          title="Oh No! You spend too much!"
        />
      ); //over spend budget or too overspend-> faSadTear
    } else {
      face = (
        <FontAwesomeIcon
          className="even"
          style={{ color: "rgba(129, 159,205, 1)" }}
          icon={faMeh}
          size="3x"
          data-toggle="tooltip"
          data-placement="left"
          title="Zennnn... Your budget is balanced"
        />
      ); //a balanced expence
    }
    return face;
  }

  addInnerAmountRows = (id, selected) => {
    return (
      <React.Fragment key={id}>
        <InputGroup className="budget input-group-sm">
          <p className="budget">Planned: </p>

          <Input
            type="number"
            max="1000"
            placeholder="my budget"
            value={selected.amount_planned}
            onChange={console.log("in input value has been change")}
          />
          <div className="input-group-prepend">
            <span className="input-group-text">{selected.currency}</span>
          </div>
        </InputGroup>
        <InputGroup className="budget input-group-sm">
          <p className="budget">Spend: </p>

          <Input
            type="number"
            max="1000"
            placeholder="my budget"
            value={selected.amount_spend}
            onChange={console.log("in input value has been change")}
          />
          <div class="input-group-prepend">
            <span class="input-group-text">{selected.currency}</span>
          </div>
        </InputGroup>
      </React.Fragment>
    );
  };

  addInnerSelectRows = (id, selected) => {
    return (
      <React.Fragment key={id}>
        <Row className="expenses">
          <Col md={12} size="auto">
            <SelectExpense
              onChange={this.expenseTypeSelect}
              onClick={this.addInnerSelectRows}
              defaultValue={selected.expense_type}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  };
  addRows = table => {
    let tablerows = [];

    for (let [key, value] of Object.entries(EXPENSE[table].rows)) {
      //console.log(`${key}: ${value}`);
      //console.log("from adding rows" + JSON.stringify(value.expenses));
      tablerows.push(
        <React.Fragment>
          <tr key={value}>
            <th scope="row" width="10%">
              {value.date}
              <br />
            </th>

            <td width="20%">{this.addInnerSelectRows(value.id, value)}</td>
            <td width="20%">
              <div data-button={value.id}>
                <textarea
                  size="small"
                  className="form-control"
                  aria-label="With textarea"
                  cols="3"
                  rows="1"
                  wrap="off"
                >
                  {value.notes}
                </textarea>
              </div>
            </td>
            <td width="20%">{this.addInnerAmountRows(value.id, value)}</td>
          </tr>
        </React.Fragment>
      );
    }

    return tablerows;
  };
  renderExpenseTable = () => {
    let tables = [];
    for (let [key, value] of Object.entries(EXPENSE)) {
      //console.log(key + " is of table" + EXPENSE[key].tableName);
      tables.push(
        <React.Fragment key={EXPENSE[key].tableName}>
          <div className="expense-table">
            <h4>{EXPENSE[key].tableName}</h4>{" "}
            <Row>
              <Col sm={4}>
                <InputGroup className="budget input-group-sm">
                  <p className="budget">Budget: </p>

                  <Input
                    className="budget"
                    placeholder="my budget"
                    value={EXPENSE[key].budget}
                    onChange={console.log("in input value has been change")}
                  />
                  {this.renderFace(calculateSpendSum(key), EXPENSE[key].budget)}
                </InputGroup>
                <InputGroup className="budget input-group-sm">
                  <p className="budget">Spend: {calculateSpendSum(key)}</p>
                </InputGroup>
              </Col>
              <Col sm={{ size: 6, offset: 2 }}>
                <Button color="light">Save Table</Button>{" "}
                <Button color="light" onClick={this.handleAddingRow}>
                  Add Row
                </Button>
                <Button color="light">Delete Row</Button>
              </Col>
              <Col sm={12} key={EXPENSE[key].tableName + "table"}>
                <table className="table table-bordered table-sm col-auto">
                  <caption>List of expenses</caption>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Expense Type</th>
                      <th>Notes</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>{this.addRows(key)}</tbody>
                </table>
              </Col>
            </Row>
          </div>
          <br />
        </React.Fragment>
      );
    }
    return tables;
  };

  expenseTypeSelect = (name, value) => {
    console.log("the expense" + name + "was selected");
  };
  render() {
    return (
      <div className="container">
        <h1>Manage Expenses</h1>
        <Button color="light">New Table</Button>{" "}
        <Button color="light">Delete Table</Button>{" "}
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
