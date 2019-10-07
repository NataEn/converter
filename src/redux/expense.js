//this is a reducer for the ManageExpenseComponent that is still in production

//import { EXPENSE } from "../shared/ExpenseData";
import {
  // EXPENSES_0,
  // EXPENSES_1,
  EXPENSES_TABLES
} from "../shared/ExpenseDatadestructured";
import * as ActionTypes from "./ActionTypes";
//action is comming from
/*export const Expense = (state = EXPENSE, action) => {
   if (action.type === ActionTypes.ADD_EXPENSE) {
     console.log("from ExpenseReducer" + action.type);
     let newState = state;
     let expense = {};
     expense.id = state[action.payload.tableKey].rows.length;
     expense.expense_type = action.payload.expense_type;
     expense.amount_planned = action.payload.amount_planned;
     expense.currency = action.payload.currency;
     expense.amount_spend = action.payload.amount_spend;
     expense.notes = action.payload.notes;
     expense.date = new Date().toISOString();
     let next = newState[action.payload.tableKey].rows.concat(expense);
     newState[action.payload.tableKey].rows = next;
     console.log("from expenseReducer new State:" + JSON.stringify(newState));
     // console.log("from expenseReducer newrows" + JSON.stringify(next));
     return newState;
   } else {
     return state;
   }
 };*/
export const Expenses_0 = (
  state = { isLoading: true, errmess: null, expenses_0: [] },
  action
) => {
  if (action.type === ActionTypes.ADD_EXPENSE) {
    let expense = {};
    expense.id = state.expenses_0.length;
    expense.tableName = action.payload.tableName;
    expense.expense_type = action.payload.expense_type;
    expense.amount_planned = action.payload.amount_planned;
    expense.currency = action.payload.currency;
    expense.amount_spend = action.payload.amount_spend;
    expense.notes = action.payload.notes;
    expense.date = new Date().toISOString();
    return {
      ...state,
      isLoading: false,
      errmess: null,
      expenses_0: state.expenses_0.concat(expense)
    };
  } else if (action.type === ActionTypes.ADD_EXPENSES) {
    return {
      ...state,
      isLoading: false,
      errmess: null,
      expenses_0: action.payload
    };
  } else if (action.type === ActionTypes.EXPENSES_LOADING) {
    return { ...state, isLoading: true, errmess: null };
  } else if (action.type === ActionTypes.EXPENSES_LOADING_FAILED) {
    return { ...state, isLoading: false, errmess: action.payload };
  } else {
    return state;
  }
};

export const Expenses_tables = (state = EXPENSES_TABLES, action) => {
  if (action.type === ActionTypes.ADD_EXPENSE_TABLE) {
    let table = {};
    table.id = state.length;
    table.tableName = action.payload.tableName;
    table.budget = action.payload.budget;
    table.date = new Date().toISOString();
    return state.concat(table);
  } else {
    return state;
  }
};
