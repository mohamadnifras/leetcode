var createCounter = function(init) {
    let value = init
    return {
        increment: () => ++value,
        decrement: () => --value,
        reset: () => (value = init),
    }
};
let counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())