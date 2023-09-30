/* 
Diamond star pattern n=5
        *
       ***
      *****
     *******
    *********
    *********
     *******
      *****
       ***
        *

n =6
      *
     ***
    *****
   *******
  *********
 ***********
 ***********
  *********
   *******
    *****
     ***
      *
      * 
*/

function upperPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    console.log(str);
  }
}

function lowerPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";

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

function starPattern(n) {
  upperPyramid(n);
  lowerPyramid(n);
}

starPattern(5);
starPattern(7);
