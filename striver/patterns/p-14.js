/* 
 n = 5
A
AB
ABC
ABCD
ABCDE

n =6

A
AB
ABC
ABCD
ABCDE
ABCDEF

*/

function aplhaPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + " " + String.fromCharCode(65 + j);
    }
    console.log(str);
  }
}

aplhaPattern(10);
