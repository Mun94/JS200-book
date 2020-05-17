function promiseForHomework(mustdo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing homework');
            if(mustdo){
                resolve({
                    result: 'homework-result'
                });
            }else{
                reject(new Error('too lazy'));
            }
        }, 3000);
    });
};

const promiseA = promiseForHomework(true);
console.log('promiseA created');

const promiseB = promiseForHomework(false);
console.log('promiseB created');

promiseA
    .then(aa => console.log(aa))
    .catch(cc => console.log(cc));

promiseB
    .then(bb => console.log(bb))
    .catch(cc => console.error(cc));