const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);
console.log(typeof distributedArr[0]);

const modifiedArr = Array.from(distributedArr, e1 => {return e1 * 2});
console.log(modifiedArr);

const modifiedArr2 = Array.from(str, e2 => e2 * 2);
console.log(modifiedArr2);
console.log(typeof modifiedArr2[0]);