import React, { Component } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Label,
  FormGroup
} from "reactstrap";
import SelectExpense from "./SelectExpenseComponent";
import { expenseTypeSelect } from "./ManageEspensesComponent";

export class RenderNewExpense extends Component {
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
  handleSubmitExpense() {
    console.log("something");
  }
  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg" />
          &nbsp; New Row
        </Button>
        <Modal toggle={this.state.toggleModal} isOpen={this.state.modal}>
          <ModalBody>
            <ModalHeader>Add New Row in Table: {this.props.table}</ModalHeader>
            <Form onSubmit={this.props.addExpense}>
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
                <Label for="currency">Currency Name</Label>
                <Input
                  className="expenseInput"
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="dollar/euro/pound/ etc."
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount_spened">Amount Spend</Label>
                <Input
                  className="expenseInput"
                  type="number"
                  name="amount_spened"
                  id="amount_spened"
                  placeholder="How much did I spend?"
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount_planed">Amount Planned</Label>
                <Input
                  className="expenseInput"
                  type="number"
                  name="amount_planed"
                  id="amount_planed"
                  placeholder="How much did I plan to spend?"
                />
              </FormGroup>

              <FormGroup className="expenseInput">
                <Label for="notes">Expense Descrioption</Label>
                <textarea
                  size="small"
                  className="expenseInput form-control"
                  aria-label="With textarea"
                  cols="3"
                  rows="1"
                  wrap="off"
                />
              </FormGroup>
              <ModalFooter>
                Full Disclosure: we are counting on your personal integrity to
                post authentic images and appropriate data.
              </ModalFooter>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
              <Button color="secondary" onClick={this.toggleModal}>
                close
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default RenderNewExpense;
