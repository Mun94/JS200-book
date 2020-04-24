var condition = 5 > 10;
condition ? console.log('left') : console.log('right');
var result = condition ? 
(console.log("삼항 연산식의 첫 번째 표현식 입니다."),"표현식 1")
:
(console.log("삼항 연산식의 두 번째 표현식 입니다."), "표현식 2");
console.log(result);

//조건문 ? 표현문 1 : 표현문 2