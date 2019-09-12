import { EXPENSE_TABLE } from "../shared/ExpenseTable";
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
      return state.filter(row => row.expense !== rowExpense);
    case ActionTypes.RESET_TABLE:
      return state;
    default:
      return state;
  }
};
