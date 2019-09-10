import React, { Component } from "react";
import { Col, Row, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
const { ExportCSVButton } = CSVExport;
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
            onClick={() => this.handleDelete(row.databasePkey)}
          >
            Delete Row
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

class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          <Col>
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
                      onClick={() => this.handleAdd()}
                    >
                      <FontAwesomeIcon icon={faCalculator} /> Calculate
                    </Button>{" "}
                    <Button
                      className="btn bg-success text-light rounded"
                      onClick={() => this.handleAdd()}
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add Row
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
                        console.log("start to edit row!!" + row);
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
  }
}
export default Calculator;
