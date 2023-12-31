/* 
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are 
any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)




*/

// Brute force method:
/* 
time complexity = O(N*N)

*/
function areThereDuplicates(...value) {
  if (value.length === 1 || value.length === 0) return true;
  for (let i = 0; i < value.length; i++) {
    for (j = i + 1; j < value.length; j++) {
      if (value[i] === value[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

// method 2: using set properties:

/*
 time complexity = O(N)
 space complexity = O(N)
*/

function areThereDuplicatesUsingSet(...arr) {
  const uniqueArr = [...new Set(arr)];

  if (uniqueArr.length !== arr.length) return true;

  return false;
}
console.log("======================================\n");
console.log(areThereDuplicatesUsingSet(1, 2, 3));
console.log(areThereDuplicatesUsingSet(1, 2, 2)); // true
console.log(areThereDuplicatesUsingSet("a", "b", "c", "a")); // true

// method 3: frequency pattern

/* 
time complexity = O(N);
space complexity = O(N);

*/

function areThereDuplicatesFrequency(...arr) {
  const arrElCount = {};

  for (let el of arr) {
    arrElCount[el] = (arrElCount[el] || 0) + 1;
  }

  for (let key in arrElCount) {
    if (arrElCount[key] > 1) return true;
  }

  return false;
}

console.log("==========================================================\n");
// console.log(areThereDuplicatesFrequency(1, 2, 3));
// console.log(areThereDuplicatesFrequency(1, 2, 2)); // true
// console.log(areThereDuplicatesFrequency("a", "b", "c", "a")); // true

// method: 4 multiple pointers:

function areThereDuplicatesPointers(...arr) {
  const sortedArr = arr.sort();

  let start = 0;
  let next = 1;

  if (sortedArr[start] === sortedArr[next]) return true;

  for (next; next < sortedArr.length; next++) {
    if (sortedArr[start] === sortedArr[next]) {
      return true;
    } else {
      start++;
    }
  }
  return false;
}

console.log("==========================================================\n");
console.log(areThereDuplicatesPointers(1, 2, 3, 1, 3, 7, 2, 8, 5, 5));
console.log(areThereDuplicatesPointers(1, 2, 2)); // true
console.log(areThereDuplicatesPointers("a", "b", "c", "a")); // true
console.log(areThereDuplicatesPointers("a", "b", "c", "d")); // false
