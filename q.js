function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the string
    let reversed = str.split('').reverse().join('');

    // Check if the string is equal to its reversed version
    return str === reversed;
}

// Test examples
console.log(isPalindrome("madam"));       // true
console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome("hello"));       // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
