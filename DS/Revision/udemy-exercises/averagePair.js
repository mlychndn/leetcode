/* 
Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, avg) {
  if (arr.length < 2) return false;
  let start = 0;
  let next = arr.length - 1;

  while (start < next) {
    let tempAvg = (arr[start] + arr[next]) / 2;
    if (tempAvg < avg) {
      start++;
    } else if (tempAvg > avg) {
      next--;
    } else if (tempAvg === avg) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
