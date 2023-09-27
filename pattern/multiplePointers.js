/* 
 Write a function called sumZero which accepts a sorted array of integers. The function should find the firts pair where tthe sum is 0.
 Return an array that includes both values that sum to zero or undefined, if pair does not exist.

 sumZero([-3,-2, -1, 0, 1, 2, 3])
 sumZero([-2, 0, 1, 3])
 sumZero([1, 2, 3])
*/

function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      console.log(arr[i], arr[j]);
      return;
    } else if (arr[i] + arr[j] > 0) {
      j--;
    } else if (arr[i] + arr[j] < 0) {
      i++;
    }
  }

  return undefined;
}

sumZero([-3, -2, -1, 0, 1, 2, 3]);
sumZero([-2, 0, 2, 3]);
sumZero([1, 2, 3]);
