import { createStore, combineReducers } from "redux";
import { Reducer, initialState } from "./reducer";
import { Images } from "./imagesReducer";
import { Expense } from "./expenseReducer";
import { Country } from "./countryReducer";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      images: Images,
      expense: Expense,
      country: Country,
      initialState: Reducer
    })
  );
  return store;
};
//after configuring the store- set the app to use it in the App.js
