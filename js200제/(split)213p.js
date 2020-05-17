const capitals =  `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`
console.log(capitals.split(''))
capitals.split('\n').forEach(s => {
    // console.log(s);
    const capital = s.split(',')[0];
    const country = s.split(',')[1];

    console.log(`${capital} is in ${country}`);
});