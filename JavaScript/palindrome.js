const isPalindrome = (input) => {
    let string = input.replace(/[\W_]/g, '').toLowerCase();
    return string === string.split('').reverse().join('');
}

isPalindrome('A Toyota\'s a toyota_');