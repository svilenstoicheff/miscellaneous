function isBalanced(s) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (s === '') return 1;
    
    const opening = '([{';
    const closing = ')]}';
    let temp = [];

    for (let i = 0; i < s.length; i++) {
                if(opening.indexOf(s.charAt(i)) >= 0) {
            temp.push(s[i]);
        }
        if(closing.indexOf(s.charAt(i)) >= 0) {
            let popped = temp.pop();
            if(closing.indexOf(s[i]) !== opening.indexOf(popped)) {
                return 0;
            }
        }
    }

    if (temp.length > 0) return 0;
    return 1;
}

console.log(isBalanced('{{{]]))}}}'));
console.log(isBalanced('{[()]}'));
