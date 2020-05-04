function minSum(num, k) {
    if (!Number.isInteger(k) || k < 1 || k > Math.pow(10, 7)) return;
    if (num.length < 1 || num.length > Math.pow(10, 5)) return;

    let idx = 0;
    let maxNum = Math.pow(10, 4);

    while (k > 0) {
        let element = num[idx];
        if (element <= maxNum) {
            num.sort((a, b) => { return b - a });
            idx = 0;
            maxNum = num[0] / 2;
            continue;
        }
        k--;
        element = Math.ceil(element / 2);
        num[idx] = element;
        if (idx + 1 < num.length) {
            idx++;
        }
    }
    return num.reduce(function (prev, curr) {
        return parseInt(prev + curr);
    });
}