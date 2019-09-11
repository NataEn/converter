import { EXPENSE_TABLE } from "../shared/expenseTable";
import * as ActionTypes from "./ActionTypes";

export const ExpenseTable = (state = EXPENSE_TABLE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EXPENSES_TO_TABLE:
      var expense = action.payload;
      expense.id = state.length;
      expense.date = new Date().toISOString();
      return state.concat(expense);
    default:
      return state;
  }
};
