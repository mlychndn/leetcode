/* 
Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding
value squared in the second array. The frequency of values must be the same. The

  same([1, 2, 3], [4. 1, 9]) // true
  same([1, 2, 3], [1,9]) // false
  same([1, 2, 1], [4, 4, 1]) // false


*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const arr1Frequency = {};
  const arr2Frequency = {};

  for (let i = 0; i < arr1.length; i++) {
    arr1Frequency[arr1[i]] = (arr1Frequency[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2Frequency[arr2[i]] = (arr2Frequency[arr2[i]] || 0) + 1;
  }

  // console.log("arr1F:", arr1Frequency);
  // console.log("arr2F:", arr2Frequency);

  for (let key in arr1Frequency) {
    if (arr2Frequency[key * key] !== arr1Frequency[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([(1, 2, 1)], [3, 4, 1]));
console.log(same([4, 4, 5], [16, 16, 25]));
