import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
//after configuring the store- set the app to use it in the App.js
