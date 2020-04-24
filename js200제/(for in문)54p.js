var store = {snack:1000, flower : 5000, beverage : 2000};

for (var item in store){ // for (속성명(key) in 반복할 대상)
    if(!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이' + store[item] + '입니다.')
}
console.log('aa');