function getLongestPalindrome(str) {
  let splitArray = str.split("").reverse();
  let palindrome = [];
  if(str.length < 3 && (splitArray[0] != splitArray[1])) {
    palindrome.push(str[0]);
  }
  else{
    for (let index = 0; index < str.length; index++) {
      if(str[index] == splitArray[index]) {
        palindrome.push(str[index]);
      }
      
    }
  }
  console.log(palindrome);
}

getLongestPalindrome("adabbade");