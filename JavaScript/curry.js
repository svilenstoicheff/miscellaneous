function sum(a, b) {
    return a + b;
}

function curried(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}

let curriedSum = curried(sum);

console.log(sum(1, 2));
console.log(curriedSum(1)(2));