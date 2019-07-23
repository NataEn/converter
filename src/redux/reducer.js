//this file contains all reducer functions,in here we set up the state of the app
import { COUNTRY } from "../shared/CountryObjectMaker";
import Logo from "../shared/logo/Logo_for_page_title200x200.png";
import { IMAGES } from "../shared/ImagesData.1";
import { GalleryAccordingtoABC } from "../shared/CurrencyGalleryArrange";
import { EXPENSE, calculateSpendSum } from "../shared/ExpenseData";

export const initialState = {
  rates: {},
  ratesCurrencies: [],
  converterPanel: [],
  country: COUNTRY,
  logo: Logo,
  images: IMAGES,
  abcGallery: GalleryAccordingtoABC,
  expense: EXPENSE,
  calculateSpendSum: calculateSpendSum
};
export const Reducer=(state=initialState,action)=>{
return state;
}