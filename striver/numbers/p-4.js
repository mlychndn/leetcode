/* 
 Find GCD of two numbers



*/

function findGCd(n1, n2) {
  let min;
  if (n1 < n2) {
    min = n1;
  } else {
    min = n2;
  }
  let gcd = "";

  for (let i = 2; i <= min; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }

  console.log(gcd);
}

findGCd(96, 14);
findGCd(4, 8);
