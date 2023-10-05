/* 
Symmetric-Void Pattern
N=5
**********
****  ****
***    ***
**      ** 
*        *
*        *
**      **
***    ***
****  ****
**********

*/

function symmetricVoidPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = n; j >= i; j--) {
      str += "*";
    }

    for (let j = 1; j <= 2 * i - 2; j++) {
      str += " ";
    }

    for (let j = n; j >= i; j--) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = n; j >= i; j--) {
      str += "*";
    }

    for (let j = 1; j <= 2 * i - 2; j++) {
      str += " ";
    }

    for (let j = n; j >= i; j--) {
      str += "*";
    }
    console.log(str);
  }
}

symmetricVoidPattern(10);
