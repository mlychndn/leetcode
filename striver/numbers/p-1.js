/* 
Example 1:
Input: N = 12345
Output: 5
Explanation: N has 5 digits

Example 2:
Input: N = 8394
Output: 4
Explanation: N has 4 digits



*/

function countDigits(n) {
  if (n === 0) {
    console.log(1);
    return;
  }
  let quotient = n;
  let remainder = "";
  count = 0;

  while (quotient >= 1) {
    remainder = quotient % 10;

    if (remainder) {
      count++;
    }
    quotient = Math.floor(quotient / 10);
  }
  console.log(count);
}

countDigits(8394);
countDigits(12345);
countDigits(0);
countDigits(1);
countDigits(12);
