/* 
n=3
***
***
***


n=6
******
******
******
******
******
******



*/

function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n; j++) {
      string = string + "*";
    }
    console.log(string);
  }
}

starPattern(3);
console.log("==============");
starPattern(6);
