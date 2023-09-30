/* 
 n =3 
 1
 2 3
 4 5 6

 n = 4
 1
 2 3
 4 5 6
 7 8 9 10

 n =5 
 1
 2 3
 4 5 6
 7 8 9 10
 11 12 13 14 15




*/

function numberPattern(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      if (!str) {
        str += " " + count;
        count++;
      } else {
        str += " " + count;
        count++;
      }
    }
    console.log(str);
  }
}

// count =1;

numberPattern(4);
numberPattern(6);
