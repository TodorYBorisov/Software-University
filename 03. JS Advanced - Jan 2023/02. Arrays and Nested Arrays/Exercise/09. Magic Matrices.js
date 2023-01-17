function magicMatrices(array) {

    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < array.length; i++) {

        let currentArray = array[i].join('');

        for (let j = 0; j < currentArray.length; j++) {
            sumRows += Number(currentArray[j]);
            sumCols += Number(currentArray[0]);
        }
    }

    if (sumRows === sumCols) {
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);