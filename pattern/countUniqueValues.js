/* 
clountUniqueValues
  Implement a function called countUniqueValues. which accepts a sorted array, and counts the unique values in the array. There can be negative
  numbers in the array, but it will always be sorted

  countUniqueValues([1, 1, 1, 1, 1,2]) //2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) //7
  countUniqueValues([]) //0
  countUniqueValues([-2, -1, -1, 0, 1])

*/

function countUniqueValues(values) {
  if (values.length === 0) return 0;
  let i = 0;
  j = i + 1;

  count = 1;

  while (j < values.length) {
    if (values[i] !== values[j]) {
      count++;
      j++;
      i++;
    }else if(values[i] !== values[j]) {})
  }
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
