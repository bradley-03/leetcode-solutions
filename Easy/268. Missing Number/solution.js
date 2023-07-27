// https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    const rg = Math.max(...nums)

    // loop through range to find missing
    for (let i = 0; i < rg; i++) {
        if (!nums.includes(i)) { 
            // return missing number
            return i
        }
    }

    // return length if no missing number is found
    return nums.length

};

console.log(missingNumber([3,0,1]))