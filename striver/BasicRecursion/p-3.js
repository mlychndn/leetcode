/* 
Print 1 to N using Recursion
N=5;
1 2 3 4 5


*/

function prinNRecursion(i, n) {
  if (i <= n) {
    console.log(i);
  }

  if (i > n) return;

  prinNRecursion(++i, n);
}

prinNRecursion(1, 10);
