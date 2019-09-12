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
const { ExportCSVButton } = CSVExport;

const RenderTable = props => {
  return (
    <BootstrapTable
      className="table-condensed"
      keyField="id"
      data={props.expenseTable}
      table-condensed={true}
      columns={props.columns}
      cellEdit={cellEditFactory({
        mode: "click",
        onStartEdit: (row, column, rowIndex, columnIndex) => {
          console.log(
            "start to edit row!!" + rowIndex + "columnIndex" + columnIndex
          );
        },
        beforeSaveCell: (oldValue, newValue, row, column) => {
          alert("Before Saving new value Cell!!" + newValue);
        },
        afterSaveCell: (oldValue, newValue, row, column) => {
          console.log("After Saving Cell!! the oldValue is gone" + oldValue);
        }
      })}
      // selectRow={selectRow}
    />
  );
}; //end of RenderExpwnse function-component

class RenderExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleAddRowToTable = this.handleAddRowToTable.bind(this);
    this.handleDeleteRowFromTable = this.handleDeleteRowFromTable.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleAddRowToTable() {
    console.log("used handleAdd function");
    this.props.addRowToTable(this.props.expenseTable.length + 1, " ");
  }
  handleResetTable() {
    alert("to reset the table please refresh the page");
    this.props.resetTable();
  }
  handleCalculate() {
    console.log("used handleCalculate function");
  }
  handleDeleteRowFromTable(row) {
    console.log("row to delete:" + JSON.stringify(row));
    this.props.deleteRowFromTable(row);
  }

  render() {
    let sum = 10;
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
    let expenseTable = this.props.expenseTable;

    console.log(
      "from table class the expenseTable is " +
        JSON.stringify(this.props.expenseTable)
    );
    return (
      <div className="container">
        <Row className="form">
          <Col xs={12}>
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
                      <FontAwesomeIcon icon={faFileAlt} /> Export CSV
                    </ExportCSVButton>
                    <Button
                      className="btn bg-success text-light rounded"
                      onClick={() =>
                        this.handleCalculate(
                          console.log("the data inside the table is")
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faCalculator} /> Calculate
                    </Button>{" "}
                    <Button
                      className="btn bg-success text-light rounded"
                      onClick={() => this.handleAddRowToTable()}
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add Row
                    </Button>
                    <Button
                      className="btn bg-success text-light rounded"
                      onClick={() => this.handleResetTable()}
                    >
                      <FontAwesomeIcon icon={faTrashRestoreAlt} /> Reset
                    </Button>
                  </div>

                  <RenderTable
                    {...props.baseProps}
                    columns={columns}
                    expenseTable={expenseTable}
                  />
                </div>
              )}
            </ToolkitProvider>
          </Col>
        </Row>
      </div>
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
        />
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
