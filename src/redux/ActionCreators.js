import * as ActionTypes from "./ActionTypes";
import { EXPENSES_0 } from "../shared/ExpenseDatadestructured";
import axios from "axios";

//Action Creators for Manage Expense component
export const updateRates = () => (dispatch) => {
  axios
    .get("https://converter.nata.enkin.dev/.netlify/functions/fixerCurrencies")
    .then((response) => {
      dispatch({
        type: ActionTypes.UPDATE_RATES,
        payload: {
          rates: response.data.rates,
          ratesCurrencies: Object.keys(response.data.rates),
          ratesLastUpdate: response.data.date,
        },
      });
    })
    .catch((error) => {
      if (error.error) {
        console.log(error);
        return;
      }
    });
};

export const fetchExpenses = () => (dispatch) => {
  dispatch(expensesLoading(true));
  setTimeout(() => {
    dispatch(addExpenses(EXPENSES_0));
  }, 2000);
};
export const expensesLoading = () => ({
  type: ActionTypes.EXPENSES_LOADING,
});
export const expensesLoadingFailed = (errmess) => ({
  type: ActionTypes.EXPENSES_LOADING_FAILED,
  payload: errmess,
});
export const addExpenses = (expenses_0) => ({
  type: ActionTypes.ADD_EXPENSES,
  payload: expenses_0,
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
    notes: notes,
  },
});
export const addTable = (tableName, budget) => ({
  type: ActionTypes.ADD_EXPENSE_TABLE,
  payload: {
    tableName: tableName,
    budget: budget,
  },
});

//Action Creators for Calculator component
export const addRowToTable = (expense = "edit name...", price = 0) => ({
  type: ActionTypes.ADD_ROW_TO_TABLE,
  payload: {
    expense: expense,
    price: price,
  },
});
export const deleteRowFromTable = (expenseId) => ({
  type: ActionTypes.DELETE_ROW_FROM_TABLE,
  payload: {
    expenseId: expenseId,
  },
});
export const resetTable = () => ({
  type: ActionTypes.RESET_TABLE,
});
export const editExpenseTable = (newTable) => ({
  type: ActionTypes.EDIT_EXPENSE_TABLE,
  payload: {
    newTable: newTable,
  },
});
export const calculateExpensesSum = (newSum) => ({
  type: ActionTypes.CALCULATE_EXPENSES_SUM,
  payload: {
    newSum: newSum,
  },
});

//Action Creators for Saving Tips component
export const addTip = (values) => ({
  type: ActionTypes.ADD_TIP,
  payload: {
    author: values.name,
    title: values.title,
    tip: values.tip,
  },
});
//Action Creators for Contact component
export const addFeedback = (message) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: message,
});
