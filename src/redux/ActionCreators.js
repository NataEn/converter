import * as ActionTypes from "./ActionTypes";
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
export const addComment = (author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    author: author,
    comment: comment
  }
});
