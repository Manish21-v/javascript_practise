/**
 * Q) Reverse the given string
 */


//Solution 1 
function reverseString(str) {
  let reverseString = '';
  //Start the loop from the end and put each element into the new string
  for (let index = str.length -1; index >= 0; index --) {
    const element = str[index];
    reverseString += str[index];
  }
  return reverseString;
}
console.log(reverseString('manish'));

//Solution 2 : Using In-Build function

function reverseString2 (str) {
  let reverseString = '';
  let splitString = str.split(''); // split method can only be used on string
  console.log('split',splitString);
  let reverseArray = splitString.reverse();// reverse method can only be used on array
  reverseString = reverseArray.join('');//join method can only be used on array
  return reverseString; 
}

console.log(reverseString2('manish'));
