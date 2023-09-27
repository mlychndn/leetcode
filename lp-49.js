/* 
Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

function groupAnagrams(strs) {
  if (strs.length === 1) return strs;
  const obj = {};

  for (const val of strs) {
    !obj[val.split("").sort()]
      ? (obj[val.split("").sort()] = [])
      : obj[val.split("").sort()].push(val);

    // if (!obj[val.split("").sort()]) {
    //   obj[val.split("").sort()] = [];
    // }

    // if (obj[val.split("").sort()]) {
    // }
  }

  return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/* 
["eat", "tea", "tan", "ate", "nat", "bat"]

const obj = {
  "eat": ["eat", "tea"]
};


[["eat","tea", "ate"],["tan", "nat"], "bat"]

{
  ["e","a","t"]: ["eat","tea","ate"],
  ["t","a",n"]: ["tan","nat"],
  ["b","a",t"]: ["bat"]
}

[["eat","tea","ate"], ["tan","nat"],["bat"]]


*/

// const obj = {};
// obj[["a,e,t"]] = ["aet"];

// obj[["a,e,t"]].push("eat");

// console.log(obj);
