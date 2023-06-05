// https://leetcode.com/problems/transpose-matrix/

const tester = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// 1 4 7
// 2 5 8
// 3 6 9

const tester2 = [
    [1,2,3],
    [4,5,6]
]
// 1, 4
// 2, 5
// 3, 6



var transpose = function(matrix) {
    const output = []

    for (let i = 0; i < matrix[0].length; i++) {
        let newCol = []
        for (let x = 0; x < matrix.length; x++) {
            newCol.push(matrix[x][i])
        }
        output.push(newCol)
    }
    return output
}

console.log(transpose(tester2))