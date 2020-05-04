function solution(N) {
    let max = 2147483647;
    if (N > max) return;

    var binary = Number(N).toString(2);
    var gap = 0,
        temp;
    let len = binary.length;
    var remainder;
    function findLongestGap(binary) {
        var binary = binary,
            remainder = binary;
        for (let i = len - 1; i > 0; i--) {
            let end = 1, start = 0;
            if (binary[i] === '1') {
                remainder = binary.substr(0, i);
                end = i;
                start = i;
                for (j = remainder.length - 1; j > 0; j--) {

                    if (remainder[j] === '1') {
                        start = j;
                    }
                }
            }
            temp = remainder.substring(start, end).length;
            gap = temp > gap ? temp : gap;
        }
    }
    findLongestGap(binary);
    return gap;

}

console.log(solution(756234890));
