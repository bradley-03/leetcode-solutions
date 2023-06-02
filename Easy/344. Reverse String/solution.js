// https://leetcode.com/problems/reverse-string/

const tester = ["t", "e", "s", "t", "i", "n", "g"]

var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        let tempChar = s[i]
        s[i] = s[(s.length - 1) - i]
        s[(s.length - 1) - i] = tempChar
    }
    return s
};

console.log(reverseString(tester))