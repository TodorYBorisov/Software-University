function amazingNumbers(array) {

    let arrayToString = array.toString();
    let sum = 0;

    for (let i = 0; i < arrayToString.length; i++) {

        let count = Number(arrayToString[i]);
        sum += count;
    }
    // if (sum % 10 === 9) {
    //     console.log(`${array} Amazing? True`);
    // } else {
    //     console.log(`${array} Amazing? False`);
    // }
    let result = sum.toString().includes('9');
    console.log(result ? `${array} Amazing? True` : `${array} Amazing? False`)
}
amazingNumbers(1233)