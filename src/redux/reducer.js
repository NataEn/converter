//this file contains all reducer functions,in here we set up the state of the app
import Logo from "../shared/logo/Logo_for_page_title200x200.png";
import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";
import { calculateSpendSum } from "../shared/ExpenseData";

export const initialState = {
  rates: {},
  ratesCurrencies: [],
  converterPanel: [],
  logo: Logo,
  abcGallery: GalleryAccordingtoABC,
  calculateSpendSum: calculateSpendSum
};
export const Reducer = (state = initialState, action) => {
  return state;
};
