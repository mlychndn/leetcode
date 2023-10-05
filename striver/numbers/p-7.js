/* 
Check if a number is prime or not

*/

function checkPrime(n) {
  let primeFlag = true;
  if (n === 0) {
    console.log("not a prime number");
    return;
  }

  if (n === 1) {
    console.log("prime number");
    return;
  }

  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      primeFlag = false;
    }
  }

  if (!primeFlag) {
    console.log("not a prime number");
    return;
  }

  console.log("prime number");
}

checkPrime(1);
checkPrime(13);
checkPrime(17);
checkPrime(19);
checkPrime(21);

function optimalCheckPrime(n) {
  if (n === 0) {
    console.log("not a prime number");
    return;
  }
  let primeFlag = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      primeFlag = false;
    }
  }
  if (!primeFlag) {
    console.log("Not a prime number");
    return;
  }
  console.log("Prime number");
}

console.log("==================================================");
optimalCheckPrime(1);
optimalCheckPrime(13);
optimalCheckPrime(17);
optimalCheckPrime(19);
optimalCheckPrime(21);
