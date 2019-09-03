import * as ActionTypes from "./ActionTypes";
import { EXPENSES_0 } from "../shared/ExpenseDatadestructured";

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
export const addTip = (author, tip) => ({
  type: ActionTypes.ADD_TIP,
  payload: {
    author: author,
    tip: tip
  }
});
export const addFeedback = message => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: message
});
//export const postFeedback=feedback=>({alert(you posted a feedback!)})
