// https://leetcode.com/problems/concatenation-of-array/

var getConcatenation = function(nums) {
    let output = [...nums]
    for (let i = 0; i < nums.length; i++) {
        output[i + nums.length] = nums[i]
    }
    return output
};

console.log(getConcatenation([1,5]))