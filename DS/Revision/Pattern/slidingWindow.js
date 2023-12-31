/* 
Sliding Window: This pattern involves a window which can either be an array or number from one position to another;
Depending on certain condition , the window either increases or closes (and a new window is created).
very useful for keeping track of a subsetta in an array/string eetc.


ques:

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate
the maximum sum consecutive elements in the array

maxSubarraySum([1,2,5,2,8,1,5], 2)   //10;
maxSubarraySum([1,2,5,2,8,1,5], 4)   //17;
maxSubarraySum([4,2,1,6], 1)   //6;
maxSubarraySum([4, 2, 1, 6, 2], 4)   //13;
maxSubarraySum([],4) //null;

*/

// method: 1     Naive approach (Brute force method)
/* 
In this solution time complexity is O(n2);
two nested loop is there.

*/

function maxSubArraySum(arr, n) {
  //edge cases:
  if (arr.length < n) return null;
  let max = -Infinity;
  for (let i = 0; i <= arr.length - n; i++) {
    let temp = 0;
    for (let j = i; j < i + n; j++) {
      temp += arr[j];
    }
    max = Math.max(max, temp);
  }

  console.log(max);
}

// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4);
// maxSubArraySum([4, 2, 1, 6], 1);
// maxSubArraySum([4, 2, 1, 6, 2], 4);
// maxSubArraySum([], 4);

//method 2: window sliding approach

/* 
time Complexity = O(N) ====> linar;
no nested loops.


*/

function windowSliding(arr, n) {
  if (arr.length < n) {
    console.log(null);
    return;
  }

  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  max = sum;

  for (let j = n; j < arr.length; j++) {
    sum = sum + arr[j] - arr[j - n];

    max = Math.max(max, sum);
  }

  console.log("maximum", max);
}

windowSliding([1, 2, 5, 2, 8, 1, 5], 2);
windowSliding([1, 2, 5, 2, 8, 1, 5], 4);
windowSliding([4, 2, 1, 6], 1);
windowSliding(([4, 2, 1, 6, 2], 4));
windowSliding([], 4);
