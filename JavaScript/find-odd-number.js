function solution(A) {
    const len = A.length;
    if (len < 1 || len > 1000000 || len % 2 === 0) return;

    A.sort((a, b) => {
        return a - b;
    });

    let value = 0;
    A.reduce((acc, curr, idx, arr) => {
        if (curr !== acc && curr !== A[idx + 1]) {
            value = curr;
        }
        return curr;
    });
    return value;
}

console.log(solution([1, 1, 2, 2, 2, 6, 2, 5, 7, 8, 4, 7, 6, 8, 5, 4, 9, 7, 7]));

//this is not quite ready - only 66% on Codility;