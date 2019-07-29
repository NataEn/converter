import { EXPENSE } from "../shared/ExpenseData";
import * as ActionTypes from "./ActionTypes";
//action is comming from
export const Expense = (state = EXPENSE, action) => {
  if (action.type === ActionTypes.ADD_EXPENSE) {
    console.log("from ExpenseReducer" + action.type);
    let newState = state;
    let expense = {};
    expense.id = state[action.payload.tableName].rows.length;
    expense.expense_type = action.payload.expense_type;
    expense.amount_planned = action.payload.amount_planned;
    expense.currency = action.payload.currency;
    expense.amount_spend = action.payload.amount_spend;
    expense.notes = action.payload.notes;
    expense.date = new Date().toISOString();

    let next = newState[action.payload.tableName].rows.concat(expense);
    newState[action.payload.tableName].rows = next;
    console.log("from expenseReducer new State:" + JSON.stringify(newState));
    // console.log("from expenseReducer newrows" + JSON.stringify(next));
    return newState;
  } else {
    return state;
  }
};
