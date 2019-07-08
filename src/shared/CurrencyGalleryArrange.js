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
console.log("GalleryAccordingtoABCF" + JSON.stringify(array));
export const GalleryAccordingtoABC = GalleryAccordingtoABCF();
