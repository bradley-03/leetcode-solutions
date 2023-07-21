// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function(haystack, needle) {
    let needleFound = true
    for (let i = 0; i < haystack.length; i++) {
        needleFound = true
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) { // check if needle is found
                needleFound = false   
            }
        }
        if (needleFound == true) { // return index if found
            return i 
        }
    }
    return -1 // return -1 as no index was found
};