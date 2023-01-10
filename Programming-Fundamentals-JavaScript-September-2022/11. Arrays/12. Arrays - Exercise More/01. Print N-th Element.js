function printNthElement(array) {

    let step = Number(array[array.length - 1]);
    let newArray = [];

    for (let i = 0; i < array.length - 1; i += step) {

        let currentNumber = array[i];
        newArray.push(currentNumber);
    }
    console.log(newArray.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2']);