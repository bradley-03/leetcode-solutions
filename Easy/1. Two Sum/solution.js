// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) { // base number
        for (let x = 0; x < nums.length; x++) { // comparing number
            if (x !== i) { // number not compared with self
                if ((nums[x] + nums[i]) == target) {
                    return [x, i]
                }
            }
        }
    }
}