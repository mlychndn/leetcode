/* 
Given two strings, write a function to determine if the second string is an anagram of the first, An anagram is a 
word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram("", "")  //true
validAnagram("aaz", "zza") //false
validAnagram("anagram", "nagaram") //true
validAnagram("awesome", "awesom") //false
validAnagram("qwerty", "qeywrt")// true
validAnagram("texttwisttime", "timetwisttext") //true


*/

// method: 1
function validAnagram(str1, str2) {
  function frequencyObjCreation(str) {
    const frequencyOfCharInStr = {};
    for (const i of str) {
      frequencyOfCharInStr[i] = (frequencyOfCharInStr[i] || 0) + 1;
    }

    return frequencyOfCharInStr;
  }

  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;

  const frequencyOfCharInStr1 = frequencyObjCreation(str1);
  const frequencyOfCharInStr2 = frequencyObjCreation(str2);

  for (const key in frequencyOfCharInStr1) {
    if (frequencyOfCharInStr2[key] !== frequencyOfCharInStr1[key]) {
      return false;
    }

    if (!frequencyOfCharInStr2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("texttwisttime", "timetwisttext"));
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("texttwisttime", "timetwisttext"));

// method: 2
