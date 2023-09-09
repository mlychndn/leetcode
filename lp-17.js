/* 
Single Number II

Companies
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,3,2]
Output: 3

Example 2:
Input: nums = [0,1,0,1,0,1,99]
Output: 99

*/

/* function singleNumber(nums) {
  const numsCount = {};

  for (let i = 0; i < nums.length; i++) {
    numsCount[nums[i]] = (numsCount[nums[i]] || 0) + 1;
  }

  for (let key in numsCount) {
    if (numsCount[key] === 1) {
      return key;
    }
  }
}
*/

function countUnique(nums) {}

console.log(singleNumber([2, 2, 3, 2]));
