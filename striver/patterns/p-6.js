/* 
12345
1234
123
12
1
*/

function starPattern(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + j;
    }
    console.log(str);
  }
}

starPattern(5);
