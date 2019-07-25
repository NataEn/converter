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
