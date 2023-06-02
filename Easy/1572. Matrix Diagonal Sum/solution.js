// https://leetcode.com/problems/matrix-diagonal-sum/

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

var diagonalSum = function(mat) {
    let x = 0
    let total = 0
    for (let row of mat) {
        total += row[x]
        x++ 
    }
    x = mat[0].length - 1
    for (let row of mat) {
        total += row[x]
        x--
    }
    if (mat[0].length % 2 !== 0) {
        total -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]
    }
    return total
};

console.log(diagonalSum(matrix))