/*  209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.


Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1


Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0 
*/

function minSubArrayLen(target, nums) {
  let sum = 0;
  let subArray = [];
  let end = 0;
  let start = 0;
  let count = Infinity;
  while (end < nums.length) {
    sum = sum + nums[end];
    if (sum < target) {
      subArray.push(nums[end]);
    }

    if (sum >= target) {
      if (count > subArray.length) {
        count = subArray.length;
        start = start + 1;
        subArray.shift(nums[start]);
      }
    }
    end++;
  }

  console.log(count);
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(4, [-1, 4, 1]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));