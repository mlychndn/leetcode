/*
  Print Fibonacci Series up to Nth term
Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

Examples:

Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6

Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing)
*/

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let fibArr = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      fibArr.push(i);
    } else {
      fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }
  }

  return fibArr[n];
}

function fibRecursion(n) {
  let i = 0;
  let fibArr = [];
  function recursion(n) {
    if (i > n) {
      return;
    }

    if (i === 0 || i === 1) {
      fibArr[i] = i;
      i++;
    } else {
      fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
      i++;
    }

    recursion(n);
  }
  recursion(n);
  console.log(fibArr[n]);
}

fibRecursion(0);
fibRecursion(1);
fibRecursion(2);
fibRecursion(3);
