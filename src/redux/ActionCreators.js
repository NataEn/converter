import * as ActionTypes from "./ActionTypes";
import { EXPENSES_0 } from "../shared/ExpenseDatadestructured";
import { CURRENCIES } from "../shared/currencies";

//Action Creators for Manage Expense component
export const fetchOldCurrencies = () => ({
  type: ActionTypes.FETCH_OLD_CURRENCIES,
  payload: CURRENCIES
});

export const fetchExpenses = () => dispatch => {
  dispatch(expensesLoading(true));
  setTimeout(() => {
    dispatch(addExpenses(EXPENSES_0));
  }, 2000);
};
export const expensesLoading = () => ({
  type: ActionTypes.EXPENSES_LOADING
});
export const expensesLoadingFailed = errmess => ({
  type: ActionTypes.EXPENSES_LOADING_FAILED,
  payload: errmess
});
export const addExpenses = expenses_0 => ({
  type: ActionTypes.ADD_EXPENSES,
  payload: expenses_0
});
export const addExpense = (
  tableName,
  expense_type,
  amount_planned,
  currency,
  amount_spend,
  notes
) => ({
  type: ActionTypes.ADD_EXPENSE,
  payload: {
    tableName: tableName,
    expense_type: expense_type,
    amount_planned: amount_planned,
    currency: currency,
    amount_spend: amount_spend,
    notes: notes
  }
});
export const addTable = (tableName, budget) => ({
  type: ActionTypes.ADD_EXPENSE_TABLE,
  payload: {
    tableName: tableName,
    budget: budget
  }
});

//Action Creators for Calculator component
export const addRowToTable = (expense, price) => ({
  type: ActionTypes.ADD_ROW_TO_TABLE,
  payload: {
    expense: expense,
    price: price
  }
});
export const deleteRowFromTable = rowExpense => ({
  type: ActionTypes.DELETE_ROW_FROM_TABLE,
  payload: {
    rowExpense: rowExpense
  }
});
export const resetTable = () => ({
  type: ActionTypes.RESET_TABLE
});
export const editExpenseTable = newTable => ({
  type: ActionTypes.EDIT_EXPENSE_TABLE,
  payload: {
    newTable: newTable
  }
});
export const calculateExpensesSum = newSum => ({
  type: ActionTypes.CALCULATE_EXPENSES_SUM,
  payload: {
    newSum: newSum
  }
});

//Action Creators for Saving Tips component
export const addTip = (author, tip) => ({
  type: ActionTypes.ADD_TIP,
  payload: {
    author: author,
    tip: tip
  }
});
//Action Creators for Contact component
export const addFeedback = message => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: message
});
//export const postFeedback=feedback=>({alert(you posted a feedback!)})
