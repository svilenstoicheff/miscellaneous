function findSmallestDivisor(s, t) {
    let x = -1;
    let maxLength = 2 * Math.pow(10, 5);
    s = s.trim();
    t = t.trim();

    if (typeof s !== 'string' || typeof t !== 'string') return x;

    if (t.length > s.length || s.length < 2 || t.length < 2 || s.length > maxLength || t.length > maxLength) return x;

    if (s.indexOf(t) < 0) return x;

    let iter = s.length / t.length;

    if (!Number.isInteger(iter)) return x;

    let stringMayBeDivisible = s.substr(0, t.length) === s.substr(s.length - t.length);

    if (stringMayBeDivisible) {
        if (s === t) {
            x = t.length;
            let same = 0;
            let ctr = 1;
            let n = t.length;
            let shortString = t;

            while (ctr < n) {
                let pattern = t.substr(0, ctr);
                let suffix = t.substr(t.length - pattern.length);

                if (pattern === suffix) {
                    same = pattern.length;
                }

                if (pattern.length > suffix.length) break;

                ctr++;
            }
            return x - same;
        }

        let longString = s;
        for (let i = iter; i < s.length; i++) {
            if (longString.indexOf(t) === 0) {
                longString = longString.substr(t.length);
            }
        }

        if (longString.length === 0) {
            x = t.length;
            let n = t.length;
            let ctr = 1;
            let same = 0;

            while (ctr < n) {
                let pattern = t.substr(0, ctr);
                let suffix = t.substr(t.length - pattern.length);

                if (pattern === suffix) {
                    same = pattern.length;
                }

                if (pattern.length > suffix.length) break;

                ctr++;
            }
            x = x - same;
        }
    }
    return x;
}

findSmallestDivisor('abababab', 'abab');