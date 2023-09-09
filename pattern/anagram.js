/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Frequency = {};
  const str2Frequency = {};

  for (const val of str1) {
    str1Frequency[val] = (str1Frequency[val] || 0) + 1;
  }

  for (const val of str2) {
    str2Frequency[val] = (str2Frequency[val] || 0) + 1;
  }

  for (let key in str1Frequency) {
    if (str1Frequency[key] !== str2Frequency[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("texttwisttime", "timetwisttext")); //true
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
