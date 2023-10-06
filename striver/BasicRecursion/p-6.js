/* 
Factorial of n numbers
n=5 = 5*4*3*2*1 = 120
n=6 = 6*5*4*3*2*1 = 720
*/

function factorial(n) {
  if (n === 0) return 0;
  let i = 1;
  let fcatorialValue = 1;
  function recursion(n) {
    fcatorialValue *= i;
    i++;
    if (i > n) {
      return;
    }
    recursion(n);
  }
  recursion(n);
  console.log(fcatorialValue);
}

factorial(5);
factorial(6);
factorial(1);
