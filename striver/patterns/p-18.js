/* 
N=3
C
B C
A B C


N = 5;

E
D E
C D E
B C D E
A B C D E



*/

function alphaPattern(n) {
  let firstChar = 64 + n;
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 1; j++) {
      if (i === 1 && j === 1) {
        str = String.fromCharCode(firstChar);
      } else {
        firstChar = firstChar - j;
        str = String.fromCharCode(firstChar) + " " + str;
      }
    }
    console.log(str);
  }
}

alphaPattern(10);
