console.log('Mun Seong'.toLowerCase()); // 소문자로
console.log('Mun Seong'.toUpperCase()); // 대문자로

const value = 'Mun Seong';
console.log(value.toLowerCase() === value.toUpperCase()); // false
console.log(value.toLowerCase() == value.toUpperCase()); // false