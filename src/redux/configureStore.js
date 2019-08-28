import { createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer, initialState } from "./reducer";
import { createForms } from "react-redux-form";
import { Images } from "./imagesReducer";
import { Expenses_0, Expenses_tables } from "./expense";
import { Country } from "./countryReducer";
import { Tips } from "./tips";
import { InitialFeedback } from "./forms";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      images: Images,
      expenses_0: Expenses_0,
      expenses_tables: Expenses_tables,
      // Expense_1: Expenses_1,
      country: Country,
      initialState: Reducer,
      tips: Tips,
      ...createForms({ feedback: InitialFeedback })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
//after configuring the store- set the app to use it in the App.js
