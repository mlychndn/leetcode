/* 
clountUniqueValues
  Implement a function called countUniqueValues. which accepts a sorted array, and counts the unique values in the array. There can be negative
  numbers in the array, but it will always be sorted

  countUniqueValues([1, 1, 1, 1, 1,2]) //2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) //7
  countUniqueValues([]) //0
  countUniqueValues([-2, -1, -1, 0, 1])

*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let firstPointer = 0;
  let secondPointer = 1;
  let count = 1;

  while (secondPointer < arr.length) {
    if (arr[firstPointer] === arr[secondPointer]) {
      secondPointer++;
    } else if (arr[firstPointer] !== arr[secondPointer]) {
      firstPointer++;
      arr[firstPointer] = arr[secondPointer];
      secondPointer++;
    }
  }
  // console.log(arr.splice(0, firstPointer + 1));
  return firstPointer + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// Here time complexity will be O(N), as its linear operation we are using only one loop;
