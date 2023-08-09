// https://leetcode.com/problems/number-of-employees-who-met-the-target/

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0
    for (let hour of hours) {
        if (hour >= target) {
            count++
        }
    }
    return count
};