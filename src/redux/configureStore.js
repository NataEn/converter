import { createStore, combineReducers } from "redux";
import { Reducer, initialState } from "./reducer";
import { Images } from "./imagesReducer";
import { Expenses_0,Expenses_tables } from "./expense";
import { Country } from "./countryReducer";
import { Comments } from "./comments";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      images: Images,
      expenses_0: Expenses_0,
      expenses_tables:Expenses_tables,
      // Expense_1: Expenses_1,
      country: Country,
      initialState: Reducer,
      comments: Comments
    })
  );
  console.log("the new store is" + JSON.stringify(store.expense));
  return store;
};
//after configuring the store- set the app to use it in the App.js
