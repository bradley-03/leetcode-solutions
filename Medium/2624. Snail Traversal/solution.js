Array.prototype.snail = function (rowsCount, colsCount) {
    const output = Array(rowsCount).fill(null).map(() => Array(colsCount).fill(0));
    let index = 0

    if (rowsCount * colsCount !== this.length) {
        return []
    }

    for (let column = 0; column < colsCount; column++) {
        if (column % 2 == 0) { // only odd columns traverse upwards
            for (let row = 0; row < rowsCount; row++) {
                output[row][column] = this[index]
                index++
            }
        } else {
            for (let row = rowsCount - 1; row >= 0; row--) {
                output[row][column] = this[index]
                index++
            }
        }
    }
    return output
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]

// [[19, 17, 16, 15],
// [10, 1, 14, 4],
// [3, 2, 12, 20],
// [7, 5, 18, 11],
// [9, 8, 6, 13]]


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// [[1, 6, 7],
// [2, 5, 8]
// [3, 4, 9]]

console.log(arr.snail(5, 4))
// console.log(arr2.snail(3,3))