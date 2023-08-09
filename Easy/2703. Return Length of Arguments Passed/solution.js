// https://leetcode.com/problems/return-length-of-arguments-passed/

// var argumentsLength = function(...args) {
//     return args.length
// };

var argumentsLength = function(...args) {
    let count = 0
    while (args[count] !== undefined) {
        count++
    }
    return count
};

console.log(argumentsLength(1, 2, 3))