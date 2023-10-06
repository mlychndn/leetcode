/* 
Check if the given String is Palindrome or not
Problem Statement: “Given a string, check if the string is palindrome or not.”  A string is said to be palindrome if the reverse of the string is the same as the string.

Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string.

*/

function isPalindrome(str) {
  if (str.length === 1 || str.length === 0) return true;
  let reverseStr = "";
  let strLength = str.length;
  str = str.toLowerCase();
  str.replace(/[^a-z0-9]/gi, "");
  console.log("str", str);
  function recursion(str, strLength) {
    reverseStr += str[strLength - 1];
    if (strLength === 1) return;
    recursion(str, --strLength);
  }
  recursion(str, strLength);
  console.log("reverse", reverseStr);
  if (str === reverseStr) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome("Abcdcba");
isPalindrome("TAKE U FORWARD");
isPalindrome("A man, a plan, a canal: Panama");
