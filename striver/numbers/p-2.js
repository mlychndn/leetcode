/* 
Example 1:
Input: N = 123
Output: 321
Explanation: The reverse of 123 is 321

Example 2:
Input: N = 234
Output: 432
Explanation: The reverse of 234 is 432



*/

function reverseNumber(n) {
  if (n === 0) {
    console.log(0);
    return;
  }
  let quotient = n;
  let remainder = "";
  let reverseNumeber = "";

  while (quotient >= 1) {
    remainder = quotient % 10;

    if (remainder) {
      reverseNumeber += remainder;
    }
    quotient = Math.floor(quotient / 10);
  }
  console.log(Number(reverseNumeber));
}

reverseNumber(25);
reverseNumber(5);
reverseNumber(435);
