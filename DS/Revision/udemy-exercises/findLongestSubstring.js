/* 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all 
distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)


*/

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let maxLen = -Infinity;

  let firstUniqueArrStr = [];
  for (let i = 0; i < str.length; i++) {
    if (firstUniqueArrStr.indexOf(str[i]) === -1) {
      firstUniqueArrStr.push(str[i]);
    } else {
      break;
    }
  }
  maxLen = Math.max(maxLen, firstUniqueArrStr.length);

  let start = 0;
  let end = firstUniqueArrStr.length - 1;

  while (end < str.length) {
    start = firstUniqueArrStr.indexOf(str[end]) + 1;
    end++;
    maxLen = Math.max(maxLen, firstUniqueArrStr.length);
  }

  return maxLen;
}

console.log(findLongestSubstring("")); //0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
