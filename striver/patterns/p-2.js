/* 
n=3
*
**
***

n=6
*
**
***
****
*****
******
*/

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

starPattern(6);
