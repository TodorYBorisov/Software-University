function matrix() {

    let matrix = [[4, 5, 6, 2], [6, 5, 4, 3], [5, 5, 5, 7]];

    for (let row of matrix) {
        for (let el of row) {
            console.log(el);
        }    
    }
//////////////////////////////////////////////////

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            console.log(element);
        }
    }
/////////////////////////////////////////////////////
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length - 1; col++) {
            let element = matrix[row][col];
            let nextElement = matrix[row][col + 1];
            if (element === nextElement) {
                counter++;
            }
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length - 1; row++) {
            let element = matrix[row][col];
            let nextElement = matrix[row + 1][col];
            if (element === nextElement) {
                counter++;
            }
        }
    }
}
matrix();