// https://leetcode.com/problems/reverse-vowels-of-a-string/

const vowels = "aeiouAEIOU"

var reverseVowels = function(s) {
    let sVowels = []
    let output = s.split('')
    for (let char of s) {
        if (vowels.includes(char)) {
            sVowels.push(char)
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            output[i] = sVowels[sVowels.length - 1]
            sVowels.pop() 
        }
    }
    return output.join('')
};

console.log(reverseVowels('Animal'))