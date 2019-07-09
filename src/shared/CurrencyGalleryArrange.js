import { IMAGE } from "./ImagesData";
import { IMAGES } from "./ImagesData.1";

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

export const GalleryAccordingtoABC = GalleryAccordingtoABCF();

// export function imagesByLetter(letter) {
//   //console.log("IMAGES[0][letter]" + JSON.stringify(IMAGES[0][letter]));
//   return IMAGES[0][letter];
// }
// //export function imagesByCountry(country) {
//   let keys = Object.keys(IMAGES);
//   //console.log("IMAGES[0][letter]" + JSON.stringify(IMAGES[0][letter]));

//   keys.map(letter => {
//     return imagesByLetter(letter).filter(image => {
//       return image.country === country;
//     });
//   });
// }
// imagesByLetter("a");
// imagesByCountry("Germany");

// let data = {
//   'a': {
//     'algeria': [1],
//     'albania': [2],
//     'australia': [3]
//   },
//   'b': {
//     'bulgaria': [4],
//     'bolivia': [5]
//   }
// };

// let country = 'bolivia';
// let cdata = data[country[0]][country];
