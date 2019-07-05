import { CORRENCY } from "./currenciesData";

const CurrencyAccordingtoABCF = () => {
  const abcArray = [];
  console.log(CORRENCY[0].name);
  console.log(CORRENCY[0].name.length);
  for (var i = 0, j = 0; i <= CORRENCY[i].name.length; i++) {
    if (CORRENCY[i].name[j] === CORRENCY[i + 1].name[j]) {
      j++;
    } else if (CORRENCY[i].name[j] < CORRENCY[i + 1].name[j]) {
      abcArray.push(CORRENCY[i]);
    } else {
      abcArray.push(CORRENCY[i + 1]);
    }
  }
  return abcArray;
};
const CurrencyAccordingtoABC = CurrencyAccordingtoABCF();
export default CurrencyAccordingtoABC;
