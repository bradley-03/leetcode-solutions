// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
    const output = nums
    for (let i = 1; i < nums.length; i++) {
        output[i] = nums[i] + nums[i - 1]
    }
    return output
};

console.log(runningSum([1,2,3,4]))