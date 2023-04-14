// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    const reverseNum = Number(String(x).split('').reverse().join(''))
    return reverseNum == x 
};