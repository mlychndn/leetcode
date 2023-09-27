/* 
n=5;
1
22
333
4444
55555

n =6;
1
12
123
1234
12345
123456
*/

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + i;
    }
    console.log(str);
  }
}

starPattern(5);
