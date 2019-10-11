import { CURRENCIES } from "../shared/currencies";
import * as ActionTypes from "./ActionTypes";

export const initialRates = {
  rates: CURRENCIES.rates,
  ratesCurrencies: Object.keys(CURRENCIES.rates),
  ratesLastUpdate: CURRENCIES.date
};
export const Rates = (state = initialRates, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_RATES: {
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
