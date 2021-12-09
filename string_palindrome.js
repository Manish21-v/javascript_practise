/**
 * Q) Find the palindrome string
 */
//Solution 1
function getPalindrome(str) {
  let palindromes = [];
  let splitArray = str.split(" ");
  console.log(splitArray);

  for (let index = 0; index < splitArray.length; index++) {
    let temp = splitArray[index];
    let reverseString = splitArray[index].split('').reverse().join("");
    console.log(`temp : ${temp} , reverseString : ${reverseString}`);
    if(temp == reverseString) {
      palindromes.push(temp);
    }
  }
  return palindromes;
}

console.log(getPalindrome('get the palidrome malayalam word malayalam nitin'));