function solution(A) {
    const inputArray = Array.from(new Set(A)).sort((a, b) => {
        return a - b;
    });

    let returnCandidate = 1;

    if (inputArray.length > 100000) {
        inputArray = inputArray.slice(0, 100000);
    }

    if (inputArray.length === 1 && inputArray[0] > 0) {
        return inputArray[0];
    } else if (inputArray.length === 1) {
        return returnCandidate;
    }

    for (let i = 0; i < inputArray.length; i++) {
        let el = inputArray[i];
        if (el > 0 && (inputArray[i + 1] !== el + 1)) {
            return returnCandidate = el + 1;
        }
    }

    return returnCandidate;
}

testArray = [2, 7, 8];
testArray[1238565] = 9;
console.log(solution([1, 28, 3000456, 4, 5, 8, 9, 23]));
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1]));
console.log(solution(testArray));