/* 
              *
             ***
            *****
           *******
          *********
         ***********


*/
function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = n - 1; j >= i; j--) {
      str = str + " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str = str + "*";
    }

    for (let j = n - 1; j >= i; j--) {
      str = str + " ";
    }

    console.log(str);
  }
}

starPattern(5);
starPattern(7);
