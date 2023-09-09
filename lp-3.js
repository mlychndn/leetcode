/* 
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

// brute force method
// time-complexity = O(n^2)
// space complexity = O(1)

/* 

function lengthOfLongestSubstring(str) {
  if (str.length === 0) return 0;

  let subStrArray = [];
  for (let i = 0; i < str.length; i++) {
    let subStr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (subStr.indexOf(str[j]) === -1) {
        subStr += str[j];
      } else if (subStr.indexOf(str[j]) !== -1) {
        break;
      }
    }
    subStrArray.push(subStr.length);
  }
  console.log(Math.max(...subStrArray));
}

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");

*/

// window slide approach (using two pointers)

/* function lengthOfLongestSubstring(s) {
  let n = s.length;
  let end = 0;
  let start = 0;
  let maxLength = 0;

  const uniqueCharacters = new Set();

  while (end < n) {
    if (!uniqueCharacters.has(s[end])) {
      uniqueCharacters.add(s[end]);
      maxLength = Math.max(maxLength, uniqueCharacters.size);
      end++;
    } else if (uniqueCharacters.has(s[end])) {
      uniqueCharacters.delete(s[start]);

      start++;
    }
  }

  console.log(maxLength);
}

lengthOfLongestSubstring("abcabcbb");
*/

// ***** Revision ****************

function lengthOfLongestSubstring(str) {
  // Brute force method, here time complexity will O(n^3) and space complexity = O(n)
  function findMaximum(arr) {
    let max = arr[0];
    for (let val of arr) {
      if (val >= max) {
        max = val;
      }
    }
    return max;
  }

  if (str.length === 1) return str.length;

  const subStrLength = [];

  for (let i = 0; i < str.length; i++) {
    let substr = str[i];
    subStrLength.push(substr.length);

    for (let j = i + 1; j < str.length; j++) {
      if (substr.indexOf(str[j]) === -1) {
        substr = substr + str[j];
        subStrLength.push(substr.length);
      } else {
        break;
      }
    }
  }

  if (subStrLength.length === 0) return 1;

  return findMaximum(subStrLength);
}

// console.log(lengthOfLongestSubstring("pwwkew"));

// optimize solution

function optimizeLengthOfLongestSubstring(str) {
  if (!str) return 0;

  // window sliding approach
  const set = new Set();
  let start = 0;
  let end = 0;
  let maximumLength = 0;

  while (end < str.length) {
    if (!set.has(str[end])) {
      set.add(str[end]);
      maximumLength = Math.max(maximumLength, set.size);
      end++;
    } else {
      set.delete(str[start]);
      start++;
    }
  }

  return maximumLength;
}

// pwwkew
console.log(optimizeLengthOfLongestSubstring("pwwkew"));
