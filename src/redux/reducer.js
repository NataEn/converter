//this file contains all reducer functions,in here we set up the state of the app

import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";
import { CURRENCIES } from "../shared/currencies";
export const initialState = {
  rates: CURRENCIES.rates,
  ratesCurrencies: Object.keys(CURRENCIES.rates),
  //converterPanel: [],
  abcGallery: GalleryAccordingtoABC
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
