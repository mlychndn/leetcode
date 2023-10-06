/* 
Print N to 1 using Recursion


*/

function printUsingRecursion(i, n) {
  if (n < i) return;
  console.log(n);
  printUsingRecursion(i, --n);
}

printUsingRecursion(1, 100);
