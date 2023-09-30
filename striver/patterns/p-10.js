/* 
Input Format: N = 3

*
**
***
**
*

Input Format: N = 6

*
**
***
****
*****
******
*****
****
***
**
*

*/

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }

  for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

starPattern(5);
