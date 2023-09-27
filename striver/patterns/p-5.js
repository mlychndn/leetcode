/* 
n=5
*****
****
***
**
*
*/

function starPattern(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

starPattern(6);
