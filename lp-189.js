/* 
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]ssss

*/

function rotate(nums, k) {
  // Brute force, time copmplexkity will be O(n*n)
  /*for (let i = 1; i <= k; i++) {
    let k = nums[nums.length - 1];
    nums.pop();
    nums.unshift(k);
  }

  return nums;
  */
  // Brute force, time copmplexkity will be O(N) and space complexity O(N) but not passinnf the edge cases
  /*let extracted = [];

  if (nums.length > k) {
    for (let i = nums.length - k; i < nums.length; i++) {
      extracted.push(nums[i]);
    }
  } else {
    extracted = nums;
  }

  for (let j = nums.length - 1; j > k - 1; j--) {
    nums[j] = nums[j - k];
  }

  for (let k = 0; k < extracted.length; k++) {
    nums[k] = extracted[k];
  }

  console.log(nums);
  */
  //   for (let i = 0; i < k; i++) {
  //     let reserverValue = nums[nums.length - 1];
  //     for (let j = nums.length - 1; j >= 1; j--) {
  //       nums[j] = nums[j - 1];
  //     }
  //     nums[0] = reserverValue;
  //   }
  //   return nums;

  const reverse = (nums, i, j) => {
    for (let k = i; k <= j; k++) {
      let storeVal = nums[k];
      nums[k] = nums[j];
      nums[j] = storeVal;
      j--;
    }
  };
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  console.log(nums);
}

console.log(rotate([1, 2], 3));
3 % 2 == 1;

/*
   [1, 2, 3, 4, 5, 6, 7] k=3
   [7, 6, 5, 4, 3, 2, 1]
   [5, 6, 7, 1, 2, 3, 4]
*/
