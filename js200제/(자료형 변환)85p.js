console.log("5" + 1); //51
console.log("5" - 1); //4
console.log("5" * 2); //10
console.log("there is" + 5); //there is 5
console.log("five" * 2); //NaN

console.log('-연산자를 활용한 자료형 변환');
var str = 5 + "1";
console.log(str); //51
console.log(typeof str); //string

var num = +str; //단항 양수 +를 통해 문자형을 숫자형으로 변환할 수 있다.
console.log(num); //51
console.log(typeof num); //number

console.log('-함수를 활용한 자료형 변환');
str = String(num);
console.log(str); // 51
console.log(typeof str); //string

num = Number(str);
console.log(num); //51
console.log(typeof num); //number
