const data = {
  searchProps: { searchText: "" },
  csvProps: {},
  columnToggleProps: {
    columns: [
      { dataField: "expense", text: "Expense Name" },
      { dataField: "price", text: "Expense Price" },
      { dataField: "databasePkey", text: "", editable: false }
    ]
  },
  baseProps: {
    keyField: "id",
    columns: [
      { dataField: "expense", text: "Expense Name" },
      { dataField: "price", text: "Expense Price" },
      { dataField: "databasePkey", text: "", editable: false }
    ],
    data: [
      { expense: "Flight", price: 10, date: "" },
      { expense: "Housing", price: 10, date: "" },
      { expense: "Food", price: 10, date: "" }
    ],
    bootstrap4: false
  }
};
