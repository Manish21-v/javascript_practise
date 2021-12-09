function getDuplicate(str) {
  let duplicates = {};
  let splitArray = str.split(" ");
  console.log(splitArray);
  for (let index = 0; index < splitArray.length; index++) {
    if (!duplicates.hasOwnProperty(splitArray[index])) {
      duplicates[splitArray[index]] = 1;
    }else if (duplicates.hasOwnProperty(splitArray[index])){
      duplicates[splitArray[index]] += 1;
    }
  }
  for (const key in duplicates) {
    if (duplicates[key] == 1) {
      delete duplicates[key];
    }
  }
  return duplicates;
}
console.log(getDuplicate('one two three one two five six seven ten one three'));