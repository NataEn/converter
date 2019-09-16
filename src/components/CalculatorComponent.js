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
import { parseWithOptions } from "date-fns/esm/fp";
import { Control, Form, Errors, actions } from "react-redux-form";
const { ExportCSVButton } = CSVExport;

// const RenderTable = props => {
//   return (
//     <BootstrapTable
//       className="table-condensed"
//       keyField="id"
//       data={props.expenseTable}
//       table-condensed={true}
//       columns={props.columns}
//       cellEdit={cellEditFactory({
//         mode: "click",
//         onStartEdit: (row, column, rowIndex, columnIndex) => {
//           console.log(
//             "start to edit row!!" + rowIndex + "columnIndex" + columnIndex
//           );
//         },
//         // beforeSaveCell: (oldValue, newValue, row, column) => {
//         //   alert("Before Saving new value Cell!!" + newValue);
//         // },
//         afterSaveCell: (oldValue, newValue, row, column) => {
//           document.getElementById("calculateExpensesSum").click();
//         }
//       })}
//       // selectRow={selectRow}
//     />
//   );
// }; //end of RenderExpwnse function-component

class RenderExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.handleAddRowToTable = this.handleAddRowToTable.bind(this);
    this.handleDeleteRowFromTable = this.handleDeleteRowFromTable.bind(this);
    this.handleCalculateExpensesSum = this.handleCalculateExpensesSum.bind(
      this
    );
  }
  handleAddRowToTable() {
    console.log("used handleAdd function");
    this.props.addRowToTable(this.props.expenseTable.length + 1, " ");
  }
  handleResetTable() {
    alert("to reset the table please refresh the page");
    this.props.resetTable();
  }
  handleCalculateExpensesSum(newTable) {
    console.log(
      "entered handle calculate function in RenderExpense Table class Component"
    );
    console.log(
      "from clicking the calculate button the new data is: " +
        JSON.stringify(newTable)
    );
    let sum = newTable.reduce((firstRow, secondRow) => ({
      price: parseInt(firstRow.price) + parseInt(secondRow.price)
    }));
    console.log("the sum is:" + sum.price);
    this.props.calculateExpensesSum(sum);
  }
  handleDeleteRowFromTable(row) {
    console.log("row to delete:" + JSON.stringify(row));
    this.props.deleteRowFromTable(row);
  }

  render() {
    const columns = [
      {
        dataField: "expense",
        text: "Expense Name"
      },
      {
        dataField: "price",
        text: "Expense Price"
      },
      {
        dataField: "databasePkey",
        text: "",
        editable: false,
        formatter: (cell, row) => {
          if (row)
            return (
              <Button
                className="btn btn-danger btn-xs border-secondary rounded"
                onClick={() => {
                  console.log("row to be deleted: " + JSON.stringify(row));
                  this.handleDeleteRowFromTable(row.expense);
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} /> <span>Delete Row</span>
              </Button>
            );
          return null;
        }
      }
    ];
    // const selectRow = {
    //   mode: "checkbox",
    //   clickToSelect: true,
    //   clickToEdit: true
    // };
    let expenseTable = this.props.expenseTable;

    console.log(
      "from table class the expenseTable is " +
        JSON.stringify(this.props.expenseTable)
    );
    return (
      <Col xs={12} className="form">
        <ToolkitProvider
          keyField="id"
          data={expenseTable}
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
                  <FontAwesomeIcon icon={faFileAlt} /> <span>Export CSV</span>
                </ExportCSVButton>
                <Button
                  id="calculateExpensesSum"
                  className="btn bg-success text-light rounded"
                  onClick={() =>
                    this.handleCalculateExpensesSum(props.baseProps.data)
                  }
                >
                  <FontAwesomeIcon icon={faCalculator} /> <span>Calculate</span>
                </Button>{" "}
                <Button
                  className="btn bg-success text-light rounded"
                  onClick={() => this.handleAddRowToTable()}
                >
                  <FontAwesomeIcon icon={faPlus} /> <span>Add Row</span>
                </Button>
                <Button
                  className="btn bg-success text-light rounded"
                  onClick={() => this.handleResetTable()}
                >
                  <FontAwesomeIcon icon={faTrashRestoreAlt} />{" "}
                  <span>Reset</span>
                </Button>
              </div>
              <BootstrapTable
                wrapperClasses="table-responsive"
                {...props.baseProps}
                className="table-condensed"
                keyField="id"
                data={expenseTable}
                table-condensed={true}
                columns={columns}
                cellEdit={cellEditFactory({
                  mode: "click",
                  onStartEdit: (row, column, rowIndex, columnIndex) => {},
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    if (isNaN(Number(newValue))) {
                      alert(
                        "You entered " +
                          newValue +
                          " Please Enter numbers Only!!"
                      );
                    }
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {
                    document.getElementById("calculateExpensesSum").click();
                  }
                })}
              />
            </div>
          )}
        </ToolkitProvider>
      </Col>
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
      <Row>
        <RenderExpenseTable
          expenseTable={props.expenseTable}
          addRowToTable={props.addRowToTable}
          deleteRowFromTable={props.deleteRowFromTable}
          resetTable={props.resetTable}
          calculateExpensesSum={props.calculateExpensesSum}
          editEepenseTable={props.editEepenseTable}
        />
        <Col className="col-auto d-block mx-auto">
          <div className="bg-warning mx-auto p-2 rounded">
            <div className="rounded p-2 bg-light">
              <h4>Total Expense</h4>
              <h1 className="my-2 text-center">
                {props.expensesSum[`${props.expensesSum.length - 1}`].price}
              </h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Breadcrumb className="mt-4">
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
