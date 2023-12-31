/* 
Write a function same, which accepts two arrays. The function should return true if every value in the array  
has it's correspomding value squared in the second array. The frequency of values must be the same. The

same([1,2,3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) //false
same([1, 2, 1], [4, 4,1]) // false (must be same frequency)


*/

function same(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
  }
  // O(N)
  for (let i = 0; i < arr2.length; i++) {
    obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
  }
  // O(N)
  for (let key in obj1) {
    if (obj1[key * key] !== obj2[key]) {
      return false;
    }
  }
  // O(N)
  return true;
}
// O(N + N +N) === O(3N)  ====> O(N)
// O(N + N) === O(N)
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
