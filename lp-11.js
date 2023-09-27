/* 
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.


*/

// time complexity O(n) and space complexity O(1);
function maxArea(height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;

  while (i < j) {
    const length = Math.min(height[i], height[j]);
    const breadth = j - i;
    maxArea = Math.max(maxArea, length * breadth);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 8, 100, 2, 100, 4, 8, 3, 7]));
