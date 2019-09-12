import React, { Component } from "react";
import { Col, Row, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCalculator,
  faTrashAlt,
  faTrashRestoreAlt
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
const { ExportCSVButton } = CSVExport;

function RenderTExpenseRowToTable({ expenses, addExpenseRow }) {
  if (expenses != null) {
    return (
      <React.Fragment>
        {expenses.map(expense => {
          return <Col xs={12} md={6} lg={4} className="p-4"></Col>;
        })}
        <Calculator addExpenseRow={addExpenseRow} />
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <h4>No Expenses Available</h4>
        <Calculator addExpenseRow={addExpenseRow} />
      </div>
    );
  }
} //end of RenderExpwnse function-component

class ExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleAddExpenseRow = this.handleAddExpenseRow.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleAddExpenseRow() {
    console.log("used handleAdd function");
    this.props.addExpenseRow(" ", " ");
  }
  handleCalculate() {
    console.log("used handleCalculate function");
  }
  handleDelete(row) {
    console.log("row:" + JSON.stringify(row));
  }

  render() {
    const products = [
      {
        id: 1,
        name: "Flight",
        price: 100
      },
      {
        id: 2,
        name: "Housing",
        price: 100
      },
      {
        id: 3,
        name: "Food",
        price: 100
      }
    ];
    const columns = [
      {
        dataField: "id",
        text: "#"
      },
      {
        dataField: "name",
        text: "Expense Name"
      },
      {
        dataField: "price",
        text: "Expense Price"
      },
      {
        dataField: "databasePkey",
        text: "",
        formatter: (cell, row) => {
          if (row)
            return (
              <Button
                className="btn btn-danger btn-xs border-secondary rounded"
                onClick={() => this.handleDelete(row)}
              >
                <FontAwesomeIcon icon={faTrashAlt} /> Delete Row
              </Button>
            );
          return null;
        }
      }
    ];
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      clickToEdit: true
    };
    return (
      <ToolkitProvider
        keyField="id"
        data={products}
        columns={columns}
        exportCSV
      >
        {props => (
          <div>
            <div className="d-flex justify-content-around p-2">
              <ExportCSVButton
                className="text-light btn bg-success border-secondary rounded"
                {...props.csvProps}
              >
                <FontAwesomeIcon icon={faFileAlt} /> Export CSV
              </ExportCSVButton>
              <Button
                className="btn bg-success text-light rounded"
                onClick={() => this.handleCalculate(props.data)}
              >
                <FontAwesomeIcon icon={faCalculator} /> Calculate
              </Button>{" "}
              <Button
                className="btn bg-success text-light rounded"
                onClick={() => this.handleAdd()}
              >
                <FontAwesomeIcon icon={faPlus} /> Add Row
              </Button>
              <Button
                className="btn bg-success text-light rounded"
                onClick={() =>
                  alert("to reset the table please refresh the page")
                }
              >
                <FontAwesomeIcon icon={faTrashRestoreAlt} /> Reset
              </Button>
            </div>

            <BootstrapTable
              {...props.baseProps}
              className="table-condensed"
              keyField="id"
              data={products}
              table-condensed={true}
              columns={columns}
              cellEdit={cellEditFactory({
                mode: "click",
                onStartEdit: (row, column, rowIndex, columnIndex) => {
                  console.log(
                    "start to edit row!!" +
                      rowIndex +
                      "columnIndex" +
                      columnIndex
                  );
                  if (columnIndex === 3) {
                    console.log(
                      "deleted row of:" +
                        JSON.stringify(products.splice(rowIndex, rowIndex + 1))
                    );
                    console.log("total rows are:" + JSON.stringify(products));
                  }
                },
                beforeSaveCell: (oldValue, newValue, row, column) => {
                  alert("Before Saving new value Cell!!" + newValue);
                },
                afterSaveCell: (oldValue, newValue, row, column) => {
                  console.log(
                    "After Saving Cell!! the oldValue is gone" + oldValue
                  );
                }
              })}
              // selectRow={selectRow}
            />
          </div>
        )}
      </ToolkitProvider>
    );
  }
}

const Calculator = props => {
  return (
    <div className="container">
      <h1>Trip Calculator</h1>
      <Row>
        <Col sm={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Trip Calculator</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="form">
        <Col xs={12}>
          <RenderTExpenseRowToTable
            expenses={props.expenseTable}
            addExpenseRow={props.addExpense}
          />
        </Col>

        <Col className="col-auto d-block mx-auto">
          <div className="bg-warning mx-auto p-2 rounded">
            <div className="mx-auto rounded p-2 bg-light">
              <h4>Total Expense</h4>
              <h1 className="my-2 text-center">10</h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Trip Calculator</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </div>
  );
};

export default Calculator;
