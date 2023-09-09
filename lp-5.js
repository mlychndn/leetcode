/* 5. Longest Palindromic Substring
Medium
27K
1.6K
Companies
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/

//radar

function isPalindrome(str) {
  if (str.length === 1) return true;
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

function longestPalindrome(str) {
  let strFrequency = {};
  let 
  for (let i = 0; i < str.length; i++) {}
}

longestPalindrome("babad");
