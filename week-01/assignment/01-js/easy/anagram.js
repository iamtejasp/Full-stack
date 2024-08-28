/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //* Check string length
  if (str1.length === str2.length) {
    //* Sort both strings
    let strOne = str1.trim().toLowerCase().split("").sort().join("");
    let strTwo = str2.trim().toLowerCase().split("").sort().join("");

    //* Compare string
    if (strOne === strTwo) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = isAnagram;
