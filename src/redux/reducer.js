//this file contains all reducer functions,in here we set up the state of the app

import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";

export const initialState = {
  rates: {},
  ratesCurrencies: [],
  converterPanel: [],
  abcGallery: GalleryAccordingtoABC 
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
