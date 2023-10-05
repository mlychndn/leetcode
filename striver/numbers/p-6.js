/* 
 Print all Divisors of a given Number


*/

// time complexity O(N)
function allDivisiors(n) {
  let allDivisiors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      allDivisiors.push(i);
    }
  }

  console.log(allDivisiors);
}

allDivisiors(36);

// optimal Approach

function optimalAllDivisiors(n) {
  let allDivisiors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      allDivisiors.push(i);
      if (i !== n / i) {
        allDivisiors.push(n / i);
      }
    }
  }
  console.log(allDivisiors);
}

optimalAllDivisiors(36);
