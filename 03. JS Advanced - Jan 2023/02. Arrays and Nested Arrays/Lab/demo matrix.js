function matrix() {

    let matrix = [[4, 5, 6, 2], [6, 5, 4, 3], [5, 5, 5, 7]];

    for (let row of matrix) {
        for (let el of row) {
            console.log(el);
        }    
    }


    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            console.log(element);
        }
    }
}
matrix();