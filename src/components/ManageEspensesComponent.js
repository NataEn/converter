import React, { Component } from "react";
import { Col, Row, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";

function RenderExpenseTable(props) {
  const columns = [
    {
      dataField: "expense",
      text: "Expense Name",
    },
    {
      dataField: "price",
      text: "Expense Price",
    },
  ];

  const expenseTable = props.table;
  const deleteTable = props.daleteTable;

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
              <Button
                className="btn bg-success text-light rounded"
                onClick={deleteTable}
              >
                <FontAwesomeIcon icon={faTrashRestoreAlt} />{" "}
                <span>Delete Table</span>
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
            />
          </div>
        )}
      </ToolkitProvider>
    </Col>
  );
}

class ManageExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }
  handleDeleteTable = () => {
    //delete from localStorage
    localStorage.removeItem(`table`, JSON.stringify(this.props.tableObj));
    this.setState({ table: [] });
  };
  componentWillMount() {
    const tableObj = this.renderTable();
    this.setState({ table: tableObj });
  }
  handleDeleteTable() {}
  renderTable() {
    const storedTable = JSON.parse(localStorage.getItem("table"));
    let tableObj = {};
    if (storedTable) {
      tableObj = storedTable.map((item) => {
        const expense_name = item.split("_")[0];
        const expense_price = Number(item.split("_")[1]);
        return { expense: expense_name, price: expense_price, date: "" };
      });
    }

    return tableObj;
  }

  render() {
    return (
      <div className="container">
        <h1>Manage Expenses</h1>
        <Row>
          <Col sm={12}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Manage Expenses</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className="form">
          <Col xs={12}>
            <h3>My Expense Table</h3>
            {this.state.message}
          </Col>
          {this.state.table.length ? (
            <RenderExpenseTable
              table={this.state.table}
              daleteTable={this.handleDeleteTable}
            />
          ) : (
            <Col xs={12}>
              <p className="text-danger text-center">There is no table saved</p>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default ManageExpenses;
