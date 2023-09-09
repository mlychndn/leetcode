/* 
 Buddy Strings
  Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
  Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
  For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 
Example 1:
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:
Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Example 3:
Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

*/

function buddyStrings(s, goal) {
  if (s.length !== goal.length) return false;

  const sSplitArr = s.split("");
  const goalSplitArr = goal.split("");

  const set1Arr = [...new Set(sSplitArr)];
  const set2Arr = [...new Set(goalSplitArr)];

  if (s === goal) {
    if (set1Arr.length < s.length) return true;
    else false;
  }

  const sArr = s.split("");
  const goalArr = goal.split("");

  let mismatchIndex = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== goalArr[i]) {
      mismatchIndex.push(i);
    }
  }

  if (mismatchIndex.length > 2 || mismatchIndex.length < 2) return false;
  let storeValue = sArr[mismatchIndex[0]];
  sArr[mismatchIndex[0]] = sArr[mismatchIndex[1]];
  sArr[mismatchIndex[1]] = storeValue;

  let swapString = sArr.join("");

  if (swapString === goal) return true;

  return false;
}

console.log(buddyStrings("abcd", "cbad"));
console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
console.log(buddyStrings("abab", "abab"));
