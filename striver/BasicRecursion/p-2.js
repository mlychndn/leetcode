/* 
 you are given an integer n. Return  an array having  "Coding Ninjas" 'n' times, without using a loop.

 input n =4;
 output: "Coding Ninjas Coding Ninjas Coding Ninjas Coding Ninjas"

*/

function printCodingNinjas(n) {
  let i = 1;
  let str = "";
  function recursion(n) {
    str += "Coding Ninjas ";
    i++;
    if (i <= n) {
      recursion(n);
    }
  }
  recursion(n);
  console.log(str);
}

printCodingNinjas(4);
