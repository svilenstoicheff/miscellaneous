function miniMaxSum(arr) {
    const min = 1;
    const max = Math.pow(10, 9);
    let minSum = 0, maxSum = 0;

    arr = arr.sort((a, b) => {
        return a - b;
    });
    arr.map((el, idx) => {
        if (idx < 4) {
            minSum += Number(el);
        }
        if (idx > 0) {
            maxSum += Number(el);
        }

    });
    if (arr[0] < min || arr[4] > max) return;
    let result = minSum + ' ' + maxSum;

    return result;
}

miniMaxSum([1, 2, 3, 4, 5]);