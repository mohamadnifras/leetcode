var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2])
    .then(([valu1,valu2])=> valu1 + valu2);
};
const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);

addTwoPromises(promise1, promise2).then(console.log);