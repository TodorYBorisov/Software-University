function nonDecreasingSubset(array) {

    let maxNumebr = Number.MIN_SAFE_INTEGER;

    let newAray = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber =Number(array[i]);

        if (currentNumber >= maxNumebr) {
            maxNumebr = currentNumber;
            newAray.push(currentNumber);
        }
    }

    console.log(newAray.join(' '))
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);