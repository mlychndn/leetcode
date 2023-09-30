/* 
input N =3

1    1
12  21
123321

input N=6

1          1
12        21
123      321
1234    4321
12345  54321
123456654321


*/

function numberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        str += j;
      } else {
        str += " ";
      }
    }

    for (j = n; j >= 1; j--) {
      if (j <= i) {
        str += j;
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

numberPattern(6);
