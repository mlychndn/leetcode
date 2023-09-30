/* 
input N=3;

1
01
101

input N=5;

1
01
101
0101
10101


*/

function binaryPattern(n) {
  if (n === 0) {
    return;
  }
  if (n === 1) {
    console.log("1");
  }
  console.log(1);
  for (let i = 2; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        if (j === 1) {
          str += 0;
        } else {
          if (str[str.length - 1] === "0") {
            str += "1";
          } else {
            str += "0";
          }
        }
      } else {
        if (j === 1) {
          str += 1;
        } else {
          if (str[str.length - 1] === "0") {
            str += "1";
          } else {
            str += "0";
          }
        }
      }
    }
    console.log(str);
  }
}

binaryPattern(5);
binaryPattern(7);
