/* 
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(n1, n2) {
  const integer1Arr = n1.toString().split("");
  const integer2Arr = n2.toString().split("");

  if (integer1Arr.length !== integer2Arr.length) return false;

  function giveFrequencyTable(arr) {
    let hashTable = {};
    for (let el of arr) {
      hashTable[el] = hashTable[el] ? hashTable[el] + 1 : 1;
    }
    return hashTable;
  }

  const integer1Frequency = giveFrequencyTable(integer1Arr);

  for (let el of integer2Arr) {
    if (!integer1Frequency[el]) return false;
    integer1Frequency[el] && integer1Frequency[el]--;
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
