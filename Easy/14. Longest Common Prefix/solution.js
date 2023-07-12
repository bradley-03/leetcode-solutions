// https://leetcode.com/problems/longest-common-prefix/

// solution was created after looking at other solutions
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return ""
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i)
            }
        }
    }
    return strs[0]
};

console.log(longestCommonPrefix(["flower","flow","flight"]))