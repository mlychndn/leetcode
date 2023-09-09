const obj = {
  i: 3,
  c: 3,
  e: 1,
  x: 1,
  a: 1,
  h: 1,
  k: 1,
  n: 1,
  b: 1,
  w: 2,
  u: 1,
};

const arry = Object.values(obj);
console.log(arry);

const sortedArray = arry.sort((a, b) => b - a);

console.log(sortedArray);

/* 
"icexiahccknibwuwgi"
i -----> 0
ic ----> 0
ice ----> 0
icex ----> 0
icexi -----> 1
icexia ----> 1
icexiah ---> 1
icexiahc ----> 1
icexiahcc ----> 1
icexiahcck ----> 1
icexiahcckn
icexiahcckni
icexiahccknib
icexiahccknibw
icexiahccknibwu
icexiahccknibwuw
icexiahccknibwuwg
icexiahccknibwuwgi













*/

let strVal = "icexiahccknibwuwgi";
let objMap = {};

for (let i = 0; i < strVal.length; i++) {
  objMap[strVal[i]] = (objMap[strVal[i]] || 0) + 1;
}
console.log(objMap);
