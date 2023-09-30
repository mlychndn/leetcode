/* 

n=5
A
B B
C C C 
D D D D 
E E E E E


*/

function alphaPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + " " + String.fromCharCode(65 + i);
    }
    console.log(str);
  }
}

alphaPattern(5);
