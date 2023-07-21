// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i
        } else if (target < nums[0]) {
            return 0
        } else if (nums[i + 1] == undefined || target > nums[i] && target < nums[i + 1]) { // check placement of target
            return i + 1
        }
    } 
};