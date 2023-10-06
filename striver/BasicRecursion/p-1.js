/* 
understanding recursion

question: You are given an integer n. Your task is to return an array containing integers from 1 to 'n' (increasing order)
without using loops



*/

function arrayOfNum(n) {
  let array = [];
  let i = 1;
  function recursion(n) {
    array.push(i);
    i = i + 1;
    if (i < n) {
      recursion(n);
    }
  }
  recursion(n);
  console.log(array);
}

arrayOfNum(5);
