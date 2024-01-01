/* fib
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
and where every number thereafter is equal to the sum of the previous two numbers.

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465

1 1 2 3 5 8 13 21 34 55

*/

function fib(num) {
  if (num === 0) return 0;
  let fibArr = [1, 1];
  let i = 2;

  function helper(num, i) {
    let sum = 0;
    if (fibArr.length === num) {
      return;
    }
    sum = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(sum);
    i = i + 1;

    helper(num, i);
  }

  helper(num, i);
  return fibArr[num - 1];
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
