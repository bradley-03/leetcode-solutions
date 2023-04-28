// https://leetcode.com/problems/roman-to-integer/

const NUMERALS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (NUMERALS[s[i + 1]] > NUMERALS[s[i]]) {
            count+= NUMERALS[s[i + 1]] - NUMERALS[s[i]]
            i++
        } else {
            count+= NUMERALS[s[i]]
        }
    }
    return count
};