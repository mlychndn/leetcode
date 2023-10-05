/* 
  Check if a number is Palindrome or Not

  Example 1:
Input: N = 123
Output: Not Palindrome Number
Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

Example 2:
Input: N =  121 
Output: Palindrome Number
Explanation: 121 read backwards as 121.Since these are two same numbers 121 is a palindrome.

*/

function isPalindrome(number) {
  if (number === 0) {
    console.log(true);
    return;
  }
  let quotient = number;
  let remainder;
  let reverseNumber = "";
  while (quotient >= 1) {
    remainder = quotient % 10;
    console.log("remainder", remainder);

    reverseNumber += remainder;
    console.log("reverse", reverseNumber);

    quotient = Math.floor(quotient / 10);
  }
  if (number === Number(reverseNumber)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome(121);
isPalindrome(111);
isPalindrome(321);
isPalindrome(124);
isPalindrome(1001);
