/* 
N=4
   A
  ABA
 ABCBA
ABCDCBA

N=5
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
 

N=5 
    *
   ***
  *****
 *******
*********      


*/

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = n; j > i; j--) {
      str = str + " ";
    }

    let count;
    for (j = 1; j <= 2 * i - 1; j++) {
      if (j <= i) {
        count = 64 + j;
        str = str + String.fromCharCode(count);
      } else {
        count--;
        str = str + String.fromCharCode(count);
      }
    }

    for (j = n; j > i; j--) {
      str += " ";
    }

    console.log(str);
  }
}

starPattern(5);
