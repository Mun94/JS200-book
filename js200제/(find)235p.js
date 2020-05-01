const arr = [
    {name: '혜림', age: 6},
    {name: '현일', age: 3},
    {name: '현아', age: 5},
    {name: '우림', age: 2},
    {name: '탄이', age: 30},
    {name: '성우', age: 30},
];

const myFriend = arr.find(a => a.age == 30);
console.log(myFriend);