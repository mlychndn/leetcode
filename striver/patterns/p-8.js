/* 
n=5

*********
 *******
  *****
   ***
    *

n=7

*************
 ***********
  *********
   *******
    *****
     ***
      *



*/

function starPattern(n) {
  for (let i = n; i >= 1; i--) {
    let str = " ";

    for (let j = n; j > i; j--) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    for (let j = n; j > i; j--) {
      str += " ";
    }
    console.log(str);
  }
}

starPattern(5);
