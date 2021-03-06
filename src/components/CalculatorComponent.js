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
  faTrashRestoreAlt,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
const { ExportCSVButton } = CSVExport;

class RenderExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [...props.expenseTable],
      editTable: props.editEepenseTable,
    };
    this.handleAddRowToTable = this.handleAddRowToTable.bind(this);
    this.handleDeleteRowFromTable = this.handleDeleteRowFromTable.bind(this);
    this.handleCalculateExpensesSum = this.handleCalculateExpensesSum.bind(
      this
    );
  }
  handleAddRowToTable() {
    this.props.addRowToTable();
  }

  handleCalculateExpensesSum(newTable) {
    const sum = newTable.reduce((firstRow, secondRow) => ({
      price: parseInt(firstRow.price) + parseInt(secondRow.price),
    }));
    this.props.calculateExpensesSum(sum);
  }
  handleDeleteRowFromTable(row) {
    this.props.deleteRowFromTable(row);
  }
  handleSaveTable(dataArray) {
    const tableDataToArray = dataArray.map(
      (item) => `${item.expense}_${item.price}`
    );
    //save to localStorage
    localStorage.setItem(`table`, JSON.stringify(tableDataToArray));
  }

  render() {
    const columns = [
      {
        dataField: "expense",
        text: "Expense Name",
        keyField: "id",
      },
      {
        dataField: "price",
        text: "Expense Price",
        keyField: "id",
        validator: (newValue, row, column) => {
          if (isNaN(newValue)) {
            return {
              valid: false,
              message: "Price should be numeric",
            };
          }
          return true;
        },
      },
      {
        dataField: "databasePkey",
        text: "",
        editable: false,
        keyField: "id",
        formatter: (cell, row) => {
          if (row)
            return (
              <Button
                className="btn btn-danger btn-xs border-secondary rounded"
                onClick={() => {
                  debugger;
                  this.handleDeleteRowFromTable(row.id);
                }}
              >
                <FontAwesomeIcon icon={faTrashAlt} /> <span>Delete Row</span>
              </Button>
            );
          return null;
        },
      },
    ];

    const expenseTable = this.props.expenseTable;
    const updateExpenseTable = this.props.editExpenseTable;
    console.log(updateExpenseTable);

    return (
      <Col xs={12} className="form">
        <ToolkitProvider
          keyField="id"
          data={expenseTable}
          columns={columns}
          exportCSV
        >
          {(props) => (
            <div>
              <div className="d-flex justify-content-around p-2">
                <ExportCSVButton
                  className="text-light btn bg-success border-secondary rounded"
                  {...props.csvProps}
                >
                  <FontAwesomeIcon icon={faFileAlt} /> <span>Export CSV</span>
                </ExportCSVButton>
                <Button
                  id="saveExpenses"
                  className="btn bg-info text-light rounded"
                  onClick={() => {
                    this.handleSaveTable(props.baseProps.data);
                  }}
                >
                  <FontAwesomeIcon icon={faSave} /> <span>Save</span>
                </Button>
                <Button
                  id="calculateExpensesSum"
                  className="btn bg-success text-light rounded"
                  onClick={() => {
                    const sum = this.handleCalculateExpensesSum(
                      props.baseProps.data
                    );
                    return sum;
                  }}
                >
                  <FontAwesomeIcon icon={faCalculator} /> <span>Calculate</span>
                </Button>{" "}
                <Button
                  className="btn bg-success text-light rounded"
                  onClick={() => this.handleAddRowToTable()}
                >
                  <FontAwesomeIcon icon={faPlus} /> <span>Add Row</span>
                </Button>
                {/* <Button
                  className="btn bg-success text-light rounded"
                  onClick={() => this.handleResetTable(table)}
                >
                  <FontAwesomeIcon icon={faTrashRestoreAlt} />{" "}
                  <span>Reset</span>
                </Button> */}
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
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    const newTable = expenseTable.map((item) => {
                      debugger;
                      if (
                        item.expense === row.expense &&
                        item.price === row.price
                      ) {
                        item[column.dataField] = newValue;
                        return item;
                      }
                      return item;
                    });

                    updateExpenseTable(newTable);
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {
                    document.getElementById("calculateExpensesSum").click();
                  },
                })}
                // cellEdit={cellEditFactory({ mode: "click" })}
              />
            </div>
          )}
        </ToolkitProvider>
      </Col>
    );
  }
}
const Calculator = (props) => {
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
          calculateExpensesSum={props.calculateExpensesSum}
          editExpenseTable={props.editExpenseTable}
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
