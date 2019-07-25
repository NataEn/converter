import { EXPENSE } from "../shared/ExpenseData";
import * as ActionTypes from "./ActionTypes";
export const Expense = (state = EXPENSE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EXPENSE:
      let expense = action.payload;
      expense.id = state.action.payload.tableName.rows.length;
      expense.date = new Date().toISOString();
      return state.concat(expense);

    default:
      return state;
  }
};
