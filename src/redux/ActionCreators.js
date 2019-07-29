import * as ActionTypes from "./ActionTypes";
export const addExpense = (
  tableKey,
  expense_type,
  amount_planned,
  currency,
  amount_spend,
  notes
) => ({
  type: ActionTypes.ADD_EXPENSE,
  payload: {
    tableKey: tableKey,
    expense_type: expense_type,
    amount_planned: amount_planned,
    currency: currency,
    amount_spend: amount_spend,
    notes: notes
  }
});
export const addComment = (author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    author: author,
    comment: comment
  }
});
