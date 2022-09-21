function isPalindrome(word) {
  //iteratue from beginning to the middle

  for (let i = 0; i < word.length / 2; i++) {

    const j = word.length - 1 - i
    
    if (word[i] != word[j]) return false

  }

  return true;

}

/* 

//compare words from the letters on either side (begging or end of word), 
iterate to the center.
If all the letters match
return true
if any letter does not match
return false 

r a c e c a r
0 1 2 3 4 5 6
i ->     <- j        idex trackers move together 


*/

/*

  This is a function that tests the validity of a palindrome. 
  It accomplishes the task by first iterating over the word, from beginning to MIDDLE. 
  As a palindrome is a like a mirror of the word, we can iterate from the end to the MIDDLE.
  As long as each letter matches, then it is a true palindrome. 
  Else it is not.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("boots"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
