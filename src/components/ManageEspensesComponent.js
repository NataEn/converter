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
import {
  EXPENSE,
  calculateSpendSum,
  spenedInAday
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
  // toggleTextarea(event) {
  //   let index = event.target.dataset.button;
  //   let textareaVisible = this.state.textareaVisible;
  //   // this.setState(state => {
  //   //   textareaVisible[index] = !state.textareaVisible[index];
  //   //   return {
  //   //     textareaVisible
  //   //   };
  //   // });
  //   console.log(this.state.textareaVisible);
  // }

  handleAddingSelectExpense = event => {
    this.addSelectInnerRows(3);
  };
  addInnerAmountRows = (number, selected) => {
    let InnerRow = [];
    if (number) {
      while (number > 0) {
        InnerRow.push(
          <React.Fragment key={number}>
            <Row className="expenses">
              <Col md={8} size="auto">
                <InputGroup className="budget input-group-sm">
                  <p className="budget">Planned: </p>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {selected[number - 1].currency}
                    </span>
                  </div>
                  <Input
                    type="number"
                    max="1000"
                    placeholder="my budget"
                    value={selected[number - 1].amount_planned}
                    onChange={console.log("in input value has been change")}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                  </div>
                </InputGroup>
                <InputGroup className="budget input-group-sm">
                  <p className="budget">Spend: </p>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {selected[number - 1].currency}
                    </span>
                  </div>
                  <Input
                    type="number"
                    max="1000"
                    placeholder="my budget"
                    value={selected[number - 1].amount_spend}
                    onChange={console.log("in input value has been change")}
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                  </div>
                </InputGroup>
              </Col>
            </Row>
            <br />
            <Row
              data-button={number - 1}
              // className={
              //   this.state.textareaVisible
              //     ? "expense-description active"
              //     : "expense-description"
              // }
            >
              {/* <textarea
                size="small"
                className="form-control"
                aria-label="With textarea"
                cols="5"
                rows="3"
                wrap="off"
              >
                {selected[number - 1].amount}
              </textarea> */}
            </Row>

            <br />
          </React.Fragment>
        );
        number--;
      }
    }
    // this.setState(prevState => ({
    //   textareaVisible: textareaVisible
    // }));
    return InnerRow;
  };

  addInnerSelectRows = (number, selected) => {
    let textareaVisible = [];
    let InnerRow = [];
    if (number) {
      while (number > 0) {
        //console.log("from inner row" + selected[number - 1].expense_type);

        InnerRow.push(
          <React.Fragment key={number}>
            <Row className="expenses">
              <Col md={8} size="auto">
                <SelectExpense
                  onChange={this.expenseTypeSelect}
                  onClick={this.addInnerSelectRows}
                  defaultValue={selected[number - 1].expense_type}
                />
              </Col>
              <Col md={2} size="auto">
                <Button
                  className="expenses "
                  data-button={number - 1}
                  onClick={this.toggleTextarea}
                >
                  <FontAwesomeIcon
                    className="budget"
                    icon={faPencilAlt}
                    size="0.5x"
                  />
                </Button>
              </Col>
            </Row>
            <br />
            <Row
              data-button={number - 1}
              // className={
              //   this.state.textareaVisible
              //     ? "expense-description active"
              //     : "expense-description"
              // }
            >
              <textarea
                size="small"
                className="form-control"
                aria-label="With textarea"
                cols="3"
                rows="3"
                wrap="off"
              >
                {selected[number - 1].notes}
              </textarea>
            </Row>

            <br />
          </React.Fragment>
        );
        number--;
      }
    }
    // this.setState(prevState => ({
    //   textareaVisible: textareaVisible
    // }));
    return InnerRow;
  };
  addRows = table => {
    let tablerows = [];

    for (let [key, value] of Object.entries(EXPENSE[table].rows)) {
      //console.log(`${key}: ${value}`);
      //console.log("from adding rows" + JSON.stringify(value.expenses));
      tablerows.push(
        <React.Fragment>
          <tr key={value}>
            <th scope="row" width="20%">
              {value.date}
              <br />
              <Button color="light" onClick={this.handleAddingSelectExpense}>
                Add Expense
              </Button>
            </th>
            <td width="30%">
              {this.addInnerSelectRows(value.expenses.length, value.expenses)}
            </td>

            <td width="55%">
              {this.addInnerAmountRows(value.expenses.length, value.expenses)}

              <p>Spend Total:{spenedInAday(value)}</p>
            </td>
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
                <Button color="light">Save</Button>{" "}
                <Button color="light">New</Button>{" "}
                <Button color="light">Delete</Button>
              </Col>
              <Col sm={12} key={EXPENSE[key].tableName + "table"}>
                <Table hover className="table-sm col-auto">
                  <caption>List of expenses</caption>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Expense Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>{this.addRows(key)}</tbody>
                </Table>
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
