//this file contains all reducer functions,in here we set up the state of the app

//import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";
import { CURRENCIES } from "../shared/currencies";
import * as ActionTypes from "./ActionTypes";

export const initialRates = {
  rates: CURRENCIES.rates,
  ratesCurrencies: Object.keys(CURRENCIES.rates),
  ratesLastUpdate: CURRENCIES.date
  //abcGallery: GalleryAccordingtoABC
};
export const Rates = (state = initialRates, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_RATES: {
      console.log("from UPDATE_RATES reducer" + JSON.stringify(action.payload));
      return {
        rates: action.payload.rates,
        ratesCurrencies: action.payload.ratesCurrencies,
        ratesLastUpdate: action.payload.ratesLastUpdate
      };
    }
    default:
      return state;
  }
};
