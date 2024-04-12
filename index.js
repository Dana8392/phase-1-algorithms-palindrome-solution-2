function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
  
}

/* 
  Add your pseudocode here

  - Loop from the start of the string to the half of its length
  - Compare characters at the beginning of the string to characters at the end
  - If any characters don't match, return false immediately
  - If the loop completes without mismatches, return true
*/

/*
  Add written explanation of your solution here
  This implementation directly compares characters from both ends of the string moving toward the middle. 
  It only needs to loop through half of the string length, which makes it efficient in terms of performance. 
  If any pair of characters does not match, it returns false. If it verifies all matching pairs up to the middle, it returns true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
