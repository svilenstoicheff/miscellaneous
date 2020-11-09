function solution(N) {
    if(N < 1 || N > 2147483647) return;
    const binaryN = Number(N).toString(2); //the 2 arg converts to binary
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


function solution2(N) {
    if(N < 1 || N > 2147483647) return;
    const binN = Number(N).toString(2);
    let zeros = '0';
    let num = 0;
    for(let i = 1; i < binN.length; i++) {
        let gap = `1${zeros}1`;
        if (binN.includes(gap)) num = i;
         zeros +='0';
    }
    return num;
}

console.log(solution2(394756));
console.log(solution2(32));
console.log(solution2(0));
console.log(solution2(1234540506443));
console.log(solution2(-1));