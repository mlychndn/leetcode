/* 
N=5

ABCDE
ABCD
ABC
AB
A

N=7

ABCDEFG
ABCDEF
ABCDE
ABCD
ABC
AB
A




*/

function alphaPattern(n) {
  for (let i = n - 1; i >= 0; i--) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + " " + String.fromCharCode(65 + j);
    }
    console.log(str);
  }
}

alphaPattern(10);
