import { IMAGE } from "./ImagesData";

//makeup array with name startimg from the same letter
export const ArrayAccordingtoLetterF = letter => {
  const letterArray = [];

  IMAGE.forEach(image => {
    //var pointer = image;

    if (image.name[0] === letter || image.name[0] === letter.toUpperCase()) {
      letterArray.push(image);
    }
  });
  return letterArray;
};

//arrange array according to the abc
const ABCArrange = array => {
  let newArray = [];
  let i = 0;

  while (array.length > 0) {
    if (array[i].name.localeCompare(array[i + 1].name) === 0) {
      newArray.push(array[i].name);
    } else if (array[i].name.localeCompare(array[i + 1].name) < 0) {
      newArray.push(array[i + 1]);
    } else {
      newArray.push(array[i]);
    }
    i++;
  }
};
//arrange Gallery according to ABC
const GalleryAccordingtoABCF = () => {
  var abcArray = new Object();
  var letter = "";
  for (var i = 0; i < 26; i++) {
    let letterArray = new Array();
    letter = String.fromCharCode(97 + i);
    letterArray = ArrayAccordingtoLetterF(letter);
    abcArray[letter] = letterArray;
  }
  return abcArray;
};
let array = GalleryAccordingtoABCF();
console.log("GalleryAccordingtoABCF" + ["a", "b", "c", "d"] + array);
console.log("GalleryAccordingtoABCF" + JSON.stringify(array));
const GalleryAccordingtoABC = GalleryAccordingtoABCF();
export default GalleryAccordingtoABC;
