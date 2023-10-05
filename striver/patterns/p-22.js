/* 
The number pattern

 n=4
 44444444
 43333334
 43222234
 43211234
 43222234
 43333334
 44444444
*/

function numberPattern(n) {
  let quotient = n;
  let remainder = "";
  let count = 0;
  while (!quotient) {
    remainder = quotient % 10;
    if (remainder) {
      count++;
    }
    quotient = quotient / 10;
  }
  console.log(count);
}

numberPattern(5);
