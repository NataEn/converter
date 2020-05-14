import { EXPENSE_TABLE, SUM } from "../shared/ExpenseTableData";
import * as ActionTypes from "./ActionTypes";

export const ExpenseTable = (state = EXPENSE_TABLE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ROW_TO_TABLE:
      var expense = action.payload;
      expense.id = state.length;
      expense.date = new Date().toISOString();
      return state.concat(expense);
    case ActionTypes.DELETE_ROW_FROM_TABLE:
      var rowExpense = action.payload.rowExpense;
      return state.filter((row) => row.expense !== rowExpense);
    case ActionTypes.EDIT_EXPENSE_TABLE:
      var newTable = action.payload.newTable;
      return newTable;
    case ActionTypes.RESET_TABLE:
      return state;
    default:
      return state;
  }
};

export const ExpensesSum = (state = SUM, action) => {
  switch (action.type) {
    case ActionTypes.CALCULATE_EXPENSES_SUM:
      return state.concat(action.payload.newSum);
    default:
      return state;
  }
};
