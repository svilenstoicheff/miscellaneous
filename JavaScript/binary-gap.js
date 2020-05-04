function solution(N) {
    if(N < 1 || N > 2147483647) return;
    const binaryN = Number(N).toString(2);
    let gap = 0, temp = 0;
    for (let i = 0; i < binaryN.length; i++) {
        if(binaryN[i] === '1') {
            temp = 0;
        }
        if (binaryN[i] === '0') {
            temp++;
            let remainder = binaryN.substr(i, binaryN.length - 1);
            if (gap < temp && remainder.indexOf('1') > 0) {
                gap = temp;
            }
        }
    }
    return gap;
}

console.log(solution(394756));
console.log(solution(32));
console.log(solution(0));
console.log(solution(1234540506443));
console.log(solution(-1));