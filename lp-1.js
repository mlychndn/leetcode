/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

// Brute force method
// time Complexity = O(n*n)
// space complexity = O(1)

/*
function twoSum(nums, target) {
  const indices = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices.push(i);
        indices.push(j);
        return indices;
      }
    }
  }
}

*/

// brute force method

/* function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 18));

*/

// function twoSum(nums, target) {
//   let numsObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     numsObj[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const requiredNumber = target - nums[i];

//     if (numsObj[requiredNumber] && numsObj[requiredNumber] !== i) {
//       return [i, numsObj[requiredNumber]];
//     }
//   }
// }

// **** REVISION *********//

function twoSum(nums, target) {
  if (nums.length === 1 && target > nums[0]) {
    return [];
  }
  //1. create an hashtable of nums with its value
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const requiredNumber = target - nums[i];

    if (numsObj[requiredNumber] && numsObj[requiredNumber] !== i) {
      return [i, numsObj[requiredNumber]];
    }
  }
}

console.log(twoSum([1, 3, 4, 2], 6));
