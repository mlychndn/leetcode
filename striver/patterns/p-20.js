/* 

Symmetric-Butterfly Pattern
n=3

*    * 
**  ** 
******
**  **
*    *


n=5

*        *
**      ** 
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
*/

function symmetricButterflyPattern(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = n; j >= i; j--) {
      str += "*";
    }

    for (j = 2 * i - 2; j >= 1; j--) {
      str += " ";
    }

    for (let j = n; j >= i; j--) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = n; j >= i; j--) {
      str += "*";
    }

    for (j = 1; j <= 2 * i - 2; j++) {
      str += " ";
    }

    for (let j = n; j >= i; j--) {
      str += "*";
    }
    console.log(str);
  }
}

symmetricButterflyPattern(6);
