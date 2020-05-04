function noTriplets(input) {
    let strArray = input.split('');
    let newArr = [];
    strArray.map(function (el, idx, arr) {
        newArr.push(el);
        if (el === newArr[newArr.length - 2] &&
            newArr[newArr.length - 2] === newArr[newArr.length - 3]) {
            newArr.pop();
        }
    });
    return newArr.join('');
}

console.log(noTriplets('aaabcccdeee'));
console.log(noTriplets('uuuuxaaaaxuuu'));
console.log(noTriplets('xxxtxxx'));