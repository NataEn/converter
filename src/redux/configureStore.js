import { createStore, combineReducers, applyMiddleware } from "redux";
import { Rates } from "./rates";
import { createForms } from "react-redux-form";
import { Images } from "./imagesReducer";
import { Expenses_0, Expenses_tables } from "./expense";
import { Country } from "./countryReducer";
import { Tips } from "./tips";
import { ExpenseTable, ExpensesSum } from "./expenseTable";
import { InitialFeedback } from "./forms";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      images: Images,
      expenses_0: Expenses_0,
      expenses_tables: Expenses_tables,
      expenseTable: ExpenseTable,
      expensesSum: ExpensesSum,
      country: Country,
      initialRates: Rates,
      tips: Tips,
      ...createForms({ feedback: InitialFeedback })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
