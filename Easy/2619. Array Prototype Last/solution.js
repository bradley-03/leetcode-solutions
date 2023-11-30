// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function () {
    if (this.length <= 0) {
        return -1
    }
    return this[this.length - 1]
};

const arr = [2,3,4,4,3]
console.log(arr.last())