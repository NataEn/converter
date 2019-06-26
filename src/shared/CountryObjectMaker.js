import { COUNTRY_BY_CORRENCY } from "./CountryByCurrency";
import { COUNTRY_BY_NAME } from "./CountryByName";

let c = [];
let b = {};
const codes = Object.keys(COUNTRY_BY_NAME[0]);
const names = Object.values(COUNTRY_BY_NAME[0]);
const currency = Object.values(COUNTRY_BY_CORRENCY[0]);
const CountryObject = () => {
  for (var i = 0; i <= names.length; i++) {
    // eslint-disable-next-line no-new-object
    b = new Object();
    b.id = i;
    b.country = names[i];
    b.countryCode = codes[i];
    b.currency = "";
    b.currencyCode = currency[i];
    b.image = codes[i] + ".png";
    c.push(b);
  }
  console.log(clientInformation);
  return c;
};

const Country = CountryObject();
export default Country;
