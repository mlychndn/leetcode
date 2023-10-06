/* 
Sum of first N Natural Numbers
n = 5;
n = 1 + 2 + 3 + 4 + 5
15

n=6
n= 1 + 2 + 3 + 4 + 5 + 6
n=21;


*/

function sumOfNaturalNumbers(sum, n) {
  sum += n;

  if (n >= 1) {
    sumOfNaturalNumbers(sum, --n);
  } else {
    console.log(sum);
    return;
  }
}

sumOfNaturalNumbers(0, 5);
