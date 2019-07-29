import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Label,
  FormGroup,
  FormText
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeh, faFrown, faSmile } from "@fortawesome/free-solid-svg-icons";
import SelectExpense from "./SelectExpenseComponent";

function spendSum(expenses, tablKey) {
  let sum = 0;
  if (tablKey) {
    // console.log(
    //   "from expense data" + tablKey + JSON.stringify(expenses[tablKey].rows)
    // );
    for (let [key, value] of Object.entries(expenses[tablKey].rows)) {
      let row = value;
      //
      sum = sum + parseInt(value.amount_spend);
      //console.log(sum);
    }
    return sum;
  } else {
    return "tablKey not found";
  }
}
function renderFace(sum, budget) {
  let face = {};
  //console.log("from render face sum is" + sum + "budget is" + budget);
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

const addAmountCell = (id, selected) => {
  return (
    <React.Fragment key={id}>
      <InputGroup className="budget input-group-sm">
        <p className="budget">Planned: </p>

        <Input
          type="number"
          max="1000"
          placeholder="my budget"
          defaultValue={selected.amount_planned}
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
          defaultValue={selected.amount_spend}
          onChange={console.log("in input value has been change")}
        />
        <div className="input-group-prepend">
          <span className="input-group-text">{selected.currency}</span>
        </div>
      </InputGroup>
    </React.Fragment>
  );
};
const expenseTypeSelect = (name, value) => {
  //console.log("the expense" + name + "was selected");
};
const addSelectCell = (id, selected) => {
  console.log("the expense" + selected.expense_type + "was selected");
  return (
    <React.Fragment key={id}>
      <Row className="expenses">
        <Col md={12} size="auto">
          <SelectExpense
            onChange={expenseTypeSelect}
            //onClick={addSelectCell}

            defaultValue={`${selected.expense_type}`}
            type="text"
            //ref={this}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};
const addRows = (expense, table) => {
  let tablerows = [];

  for (let [key, value] of Object.entries(expense[table].rows)) {
    tablerows.push(
      <React.Fragment>
        <tr key={`${table + value.id}`}>
          <th scope="row" width="10%">
            {value.date}
            <br />
          </th>

          <td width="20%">{addSelectCell(value.id, value)}</td>
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
          <td width="20%">{addAmountCell(value.id, value)}</td>
        </tr>
      </React.Fragment>
    );
  }

  return tablerows;
};

function RenderExpenseTable({ expense, addExpense }) {
  let tables = [];
  for (let [key, value] of Object.entries(expense)) {
    //console.log(key + " is of table" + EXPENSE[key].tableName);
    tables.push(
      <React.Fragment key={expense[key].tableName}>
        <div className="expense-table">
          <h4>{expense[key].tableName}</h4>{" "}
          <Row>
            <Col sm={4}>
              <InputGroup className="budget input-group-sm">
                <p className="budget">Budget: </p>

                <Input
                  className="budget"
                  placeholder="my budget"
                  value={expense[key].budget}
                  onChange={console.log(
                    "in budget planned has been change to" + expense[key].budget
                  )}
                />
                {renderFace(spendSum(expense, key), expense[key].budget)}
              </InputGroup>
              <InputGroup className="budget input-group-sm">
                <p className="budget">Spend:</p>
                <Input
                  className="budget spened"
                  placeholder="my budget"
                  value={spendSum(expense, key)}
                  onChange={console.log("in spened value has been change to")}
                />
              </InputGroup>
            </Col>
            <Col sm={{ size: 6, offset: 2 }}>
              <Button color="light">Save Table</Button>{" "}
              <RenderNewExpense table={key} addExpense={addExpense} />
              <Button color="light">Delete Row</Button>
            </Col>
            <Col sm={12} key={expense[key].tableName + "table"}>
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
                <tbody>{addRows(expense, key)}</tbody>
              </table>
            </Col>
          </Row>
        </div>
        <br />
      </React.Fragment>
    );
  }

  return tables;
}
//modal validatores
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class RenderNewExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    //this.renderExpenseTable = this.renderExpenseTable.bind(this);
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    console.log("togglemodal is evoked");
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleSubmitExpense(values) {
    this.toggleModal();
    this.props.addExpense(
      this.props.table,
      values.currency,
      values.amount_planned,
      values.currency,
      values.amount_spened,
      values.notes
    );
  }

  render() {
    return (
      <React.Fragment>
        <Button color="light" onClick={this.toggleModal}>
          New Row
        </Button>
        <Modal toggle={this.state.toggleModal} isOpen={this.state.modal}>
          <ModalBody>
            <ModalHeader>Add New Row in Table: {this.props.table}</ModalHeader>
            <LocalForm onSubmit={values => this.handleSubmitExpense(values)}>
              <FormGroup>
                <Label for="name">Expense Type</Label>

                <SelectExpense
                  name="expenseType"
                  id="expenseType"
                  onChange={expenseTypeSelect}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="currency">Currency Name</Label>

                <Control.text
                  model=".currency"
                  id="currency"
                  name="currency"
                  placeholder="dollar/euro/pound/ etc."
                  className="expenseInput form-control"
                  validators={{
                    required,
                    maxLength: maxLength(10),
                    minLength: minLength(3)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".currency"
                  show="touched"
                  messages={{
                    required: "please state Currency type",
                    minLength: " Currency should be 3 letters long",
                    maxLength: " name should be less then 10 "
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="amount_planned">Amount Planned</Label>

                <Control.text
                  type="number"
                  model=".amount_planned"
                  id="amount_planned"
                  className="expenseInput form-control"
                  placeholder="How much did I plan to spend?"
                  required
                  min={0}
                  validateOn="blur"
                />
                <Errors
                  className="errors"
                  model=".amount_planed"
                  show="touched"
                  messages={{
                    valueMissing: "Planned amount is required",
                    typeMismatch: "Must be a number",
                    rangeUnderflow: "Sorry, you must plan to spend at least 0"
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="amount_spened">Amount Spend</Label>
                <Control.text
                  type="number"
                  model=".amount_spened"
                  id="amount_spened"
                  className="expenseInput form-control"
                  placeholder="How much did I spend?"
                  required
                  min={0}
                  validateOn="blur"
                />
                <Errors
                  className="errors"
                  model=".amount_spened"
                  show="touched"
                  messages={{
                    valueMissing: "Spened amount is required",
                    typeMismatch: "Must be a number",
                    rangeUnderflow: "Sorry, you must spend at least 0"
                  }}
                />
              </FormGroup>

              <FormGroup className="expenseInput">
                <Label htmlFor="notes">Expense Descrioption</Label>
                <Control.textarea
                  size="small"
                  className="expenseInput form-control"
                  aria-label="With textarea"
                  cols="3"
                  rows="1"
                  wrap="off"
                  model=".notes"
                />
              </FormGroup>
              <ModalFooter>
                Full Disclosure: we are counting on your personal integrity to
                post authentic images and appropriate data.
              </ModalFooter>
              <Button>Submit</Button>

              <Button color="secondary" onClick={this.toggleModal}>
                close
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
const ManageExpenses = props => {
  //buttons:
  //handleNewRow recieves only the name of the table from RenderExpenseTable to open the modal
  const handleNewRow = table => {
    //console.log(table);
    console.log(props.expense[table].tableName);
    //this.props.addExpense()

    //this.renderNewRow(this.props.expense[table], props.addExpense);
  };
  return (
    <div className="container">
      <h1>Manage Expenses</h1>
      <Button color="light">New Table</Button>{" "}
      <Button color="light">Delete Table</Button>{" "}
      <div className="tableContainer">
        {" "}
        <Row>
          <Col sm={{ size: 11, offset: 1 }}>
            <RenderExpenseTable
              expense={props.expense}
              addExpense={props.addExpense}
              // props={props}
              // handleNewRow={handleNewRow}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ManageExpenses;
