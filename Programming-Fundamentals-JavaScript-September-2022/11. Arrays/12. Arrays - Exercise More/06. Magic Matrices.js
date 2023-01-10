function magicMatrices(array) {

    let numRows = array.length;
    let numCol = array[0].length;

    let rowSum1 = 0;
    let rowSum2 = 0;
    let rowSum3 = 0;

    let colSum1 = 0;
    let colSum2 = 0;
    let colSum3 = 0;

    for (let i = 0; i < numRows; i++) {
        let colElement = array[i]
        let element = Number(colElement[0])
        rowSum1 += element;
    }
    for (let j = 0; j < numRows; j++) {
        let colElement = array[j]
        let element = Number(colElement[1])
        rowSum2 += element;
    }
    for (let k = 0; k < numRows; k++) {
        let colElement = array[k]
        let element = Number(colElement[2])
        rowSum3 += element;
    }

    for (let i = 0; i < numCol; i++) {
        let colElement = array[i]
        let element = Number(colElement[0])
        colSum1 += element;
    }
    for (let j = 0; j < numCol; j++) {
        let colElement = array[j]
        let element = Number(colElement[1])
        colSum2 += element;
    }
    for (let k = 0; k < numCol; k++) {
        let colElement = array[k]
        let element = Number(colElement[2])
        colSum3 += element;
    }

    if (colSum1 === rowSum1 && colSum1 === rowSum2 && colSum1 === rowSum3) {
        console.log('true');
    } else if (colSum2 === rowSum1 && colSum2 === rowSum2 && colSum2 === rowSum3) {
        console.log('true');
    } else if (colSum3 === rowSum1 && colSum3 === rowSum2 && colSum3 === rowSum3) {
        console.log('true');
    } else {
        console.log('false');
    }

}

magicMatrices([1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]);

