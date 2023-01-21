function solve(row, col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(col);
    }
    let count = 1;
    let startRow = 0, endRow = row - 1, startCol = 0, endCol = col - 1;
    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = count++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = count++;
        }
        endCol--;
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = count++;
            }
            endRow--;
        }
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = count++;
            }
            startCol++;
        }
    }
    for (const element of matrix) {
        console.log(element);
    }
}
solve(5, 5);