/*
for(변수 of 반복 가능한 객체) {
    실행할 문장
}
*/
const str = "hello"

for(let item of str) {
    console.log(item);
}

const iter = str[Symbol.iterator]();

console.log(str[Symbol.iterator]());

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log(iter.next());
/////////////////////////////////////////////
const products = [{name:"가방"}, {name: "노트북"}];

for(const item2 of products) {
    console.log(item2.name);
}

const iter2 = products[Symbol.iterator]();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());