/* 
Hollow Rectangle Pattern
N=6

******
*    *
*    *
*    *
*    *
******
*/

function hollowRectanglePattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1) {
        str += "*";
      } else if (i === n) {
        str += "*";
      } else if (i > 1 && i < n) {
        if (j === 1 || j === n) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    console.log(str);
  }
}

hollowRectanglePattern(100);
