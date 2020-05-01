/* 배열.reduce((누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
    return 누적값으로 반환되는 값
}, 초기값);
*/
const numArr = [1,2,3,4,5];

const result = numArr.reduce((acc, e1) => {
    return acc + e1;
},0);

console.log(result);

///////////////////////////////////////////////
//중첩된 배열을 단일하게 만들기
const arr = [1, [2, 3], [4, 5, 6], ['배열', '나열하기'], 'JavaScript'];

const result2 = arr.reduce((acc, e1)=>{
    return acc.concat(e1);
},[]);

console.log(result2);