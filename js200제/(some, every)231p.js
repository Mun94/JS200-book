// some
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const isHyunAHere = arr.some(e1 => e1.name == '현아');
const olderThanSix = arr.some(e1 => e1.age > 6);
const id = arr.some(e2 => e2.id == 3);

console.log(isHyunAHere);
console.log(olderThanSix);
console.log(id);
////////////////////////////////////////////////////
// every
const arr2 = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const isAllHyunA = arr.every(e1 => e1.name == '현아');
const youngerThanSevenAll = arr.every(e1 => e1.age < 7);
const id2 = arr.every(e2 => e2.id == 3);

console.log(isAllHyunA);
console.log(youngerThanSevenAll);
console.log(id2);