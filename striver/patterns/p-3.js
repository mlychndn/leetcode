/* 
n=3
1
12
123

n=5
1
12
123
1234
12345
*/

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + j;
    }
    console.log(str);
  }
}

starPattern(4);
starPattern(5);
starPattern(6);
