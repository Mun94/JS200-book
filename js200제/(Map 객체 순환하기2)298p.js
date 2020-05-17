const map = new Map();

for (let num of [1,2,3,4,5]) {
    
    map.set((value) => value * 2, num);
}

for (let [aaaa, value] of map) {
    console.log(`${aaaa} ////// ${value}`);
    console.log(`${aaaa}`);

    console.log(aaaa(value));
}