/* 
  Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 
*/

function reverseArray(arr) {
  if (arr.length === 0) return undefined;
  if (arr.length === 1) return arr;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
    i++;
    j--;
  }

  return arr;
}

reverseArray(["h", "e", "l", "l", "o"]);
reverseArray(["h", "a", "n", "n", "a", "H"]);
reverseArray(["m", "a", "l", "a", "y"]);
