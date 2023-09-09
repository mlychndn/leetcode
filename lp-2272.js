/* 
2272. Substring With Largest Variance

The variance of a string is defined as the largest difference between the number of occurrences of any 2 characters present in the string. Note the two characters may or may not be the same.

Given a string s consisting of lowercase English letters only, return the largest variance possible among all substrings of s.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "aababbb"
Output: 3
Explanation:
All possible variances along with their respective substrings are listed below:
- Variance 0 for substrings "a", "aa", "ab", "abab", "aababb", "ba", "b", "bb", and "bbb".
- Variance 1 for substrings "aab", "aba", "abb", "aabab", "ababb", "aababbb", and "bab".
- Variance 2 for substrings "aaba", "ababbb", "abbb", and "babb".
- Variance 3 for substring "babbb".
Since the largest possible variance is 3, we return it.
Example 2:

Input: s = "abcde"
Output: 0
Explanation:
No letter occurs more than once in s, so the variance of every substring is 0.
*/

// 1. Brute force method

const s =
  "saonsgyyykrwcrgazotrnwehytroazgldgjymjsdelbkbyhwphqpwvxemocthjnylfnqdzeprlkjfnmoxtelwuzhdmaquiauqxqjbetfdmowjkxxrrcpiotfcbqvaaersmxvfqozwzovabucyzuawotyfmqyxmupaimbdwodhbujccpzegvflehfgiqahhmcpzruywisjblizatuijmdpsnxtkqlliwmtkyxgntaurksiqsvmpivrrzhflgmblqdpypxfppgkuyflcclfbqdcyyzygdgabstgwetshdehjsrxhrjlyafpwpfzaepqkarqnbllcflxdjwgjddegpdsbmoohzvcaxddjgyyfdmvbhpuxcifkhqmobhujouqptjchylwfoseftxaecxgnnsygfutcb";
function largestVariance(str) {
  if (str.length === 1) return 0;
  let subStrArr = [];

  // 1. All possible substring
  for (let i = 0; i < str.length; i++) {
    let newStr = "";
    for (let j = i; j < str.length; j++) {
      i === j ? (newStr = newStr + str[i]) : (newStr = newStr + str[j]);
      subStrArr.push(newStr);
    }
  }

  // 2. function for frequency count of substr character

  function hashTable(subStr) {
    const hashSubstrTable = {};
    for (let i = 0; i < subStr.length; i++) {
      hashSubstrTable[subStr[i]] = (hashSubstrTable[subStr[i]] || 0) + 1;
    }
    return hashSubstrTable;
  }

  //3.  creatoing a variance array

  const variance = subStrArr.map((subStr) => {
    const hasFrequency = hashTable(subStr);

    const values = Object.values(hasFrequency);

    if (values.length === 1) {
      return 0;
    } else if (values.length === 2) {
      return Math.abs(values[0] - values[1]);
    } else {
      const max = Math.max(...values);
      const min = Math.min(...values);
      return max - min;
    }
  });

  // .4 finding max value of variance
  const maxVariance = Math.max(...variance);
  return maxVariance;
}

console.log(largestVariance("icexiahccknibwuwgi"));
console.log(largestVariance("s"));

// optimizing solution
