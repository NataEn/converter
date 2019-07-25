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
      console.log(sum);
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
  return (
    <React.Fragment key={id}>
      <Row className="expenses">
        <Col md={12} size="auto">
          <SelectExpense
            onChange={expenseTypeSelect}
            onClick={addSelectCell}
            defaultValue={selected.expense_type}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};
const addRows = (props, table) => {
  let tablerows = [];

  for (let [key, value] of Object.entries(props.expense[table].rows)) {
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

class ManageExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablerows: 2,
      tableColumns: 4,
      textareaVisible: [],
      modal: false,
      table: ""
    };
    this.renderExpenseTable = this.renderExpenseTable.bind(this);
    this.handleNewRow = this.handleNewRow.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    console.log("togglemodal is evoked");
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  //buttons:
  handleNewRow = (table, props) => {
    console.log(table);
    //this.props.addExpense()
    this.setState({ table: table });
    this.toggleModal();
    //this.renderNewRow(this.props.expense[table], props.addExpense);
  };
  //functions

  renderExpenseTable = () => {
    let tables = [];
    for (let [key, value] of Object.entries(this.props.expense)) {
      //console.log(key + " is of table" + EXPENSE[key].tableName);
      tables.push(
        <React.Fragment key={this.props.expense[key].tableName}>
          <div className="expense-table">
            <h4>{this.props.expense[key].tableName}</h4>{" "}
            <Row>
              <Col sm={4}>
                <InputGroup className="budget input-group-sm">
                  <p className="budget">Budget: </p>

                  <Input
                    className="budget"
                    placeholder="my budget"
                    value={this.props.expense[key].budget}
                    onChange={console.log("in input value has been change")}
                  />
                  {renderFace(
                    spendSum(this.props.expense, key),
                    this.props.expense[key].budget
                  )}
                </InputGroup>
                <InputGroup className="budget input-group-sm">
                  <p className="budget">
                    Spend: {spendSum(this.props.expense, key)}
                  </p>
                </InputGroup>
              </Col>
              <Col sm={{ size: 6, offset: 2 }}>
                <Button color="light">Save Table</Button>{" "}
                <Button
                  color="light"
                  onClick={() => this.handleNewRow(key, this.props)}
                >
                  New Row
                </Button>
                <Button color="light">Delete Row</Button>
              </Col>
              <Col sm={12} key={this.props.expense[key].tableName + "table"}>
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
                  <tbody>{addRows(this.props, key)}</tbody>
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

  render() {
    const renderNewRow = (
      <Modal toggle={this.state.toggleModal} isOpen={this.state.modal}>
        <ModalBody>
          <ModalHeader>Add New Row in Table: {this.state.table}</ModalHeader>
          <Form onSubmit={this.props.addExpense}>
            <FormGroup>
              <Label for="name">Currency Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="dollar/euro/pound/ etc."
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">Currency State</Label>
              <Input
                type="text"
                name="state"
                id="state"
                placeholder="Unites States/Jermany/UK/etc."
              />
            </FormGroup>
            <FormGroup>
              <Label for="type">Currency Type</Label>
              <Input
                type="text"
                name="type"
                id="type"
                placeholder="coin/bill"
              />
            </FormGroup>
            <FormGroup>
              <Label for="value">Currency Value</Label>
              <Input
                type="text"
                name="value"
                id="value"
                placeholder="1/10/20/50/etc."
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageFile">File</Label>
              <Input type="file" name="file" id="imageFile" />
              <FormText color="muted">Please add your image here.</FormText>
            </FormGroup>
            <ModalFooter>
              Full Disclosure: we are counting on your personal integrity to
              post authentic images and appropriate data.
            </ModalFooter>
            <Button>Submit</Button>

            <Button color="secondary" onClick={this.toggleModal}>
              close
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
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
          <Row>{renderNewRow}</Row>
        </div>
      </div>
    );
  }
}
export default ManageExpenses;
