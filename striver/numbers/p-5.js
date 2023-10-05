/* 
Check if a number is Armstrong Number or not
153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27  = 153
170 = 1^3 + 7^3 + 0^3 = 1 + 7^3 + 0^3 = 346 not a ramstrong number
*/

function armStrongNumber(n) {
  if (n === 0) {
    console.log(true);
    return;
  }
  let quotient = n;
  let remainder = [];
  let armStrongNumber = 0;
  count = 0;

  for (quotient; quotient >= 1; quotient = Math.floor(quotient / 10)) {
    remainder.push(quotient % 10);
    count++;
  }

  for (let i = 0; i < remainder.length; i++) {
    armStrongNumber += Math.pow(remainder[i], remainder.length);
  }

  if (n === armStrongNumber) {
    console.log(true);
  } else {
    console.log(false);
  }
}
armStrongNumber(153);
armStrongNumber(1634);
armStrongNumber(222);
