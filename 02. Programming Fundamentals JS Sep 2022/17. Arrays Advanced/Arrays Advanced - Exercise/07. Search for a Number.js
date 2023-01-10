function searchForANumber(array1, array2) {

    let numbersToTake = array2[0];
    let numbersToRemove = array2[1];
    let searchedNumber = array2[2];
    let counter = 0;

    let array1AfterTake = array1.slice(0, numbersToTake);
    array1AfterTake.splice(0, numbersToRemove)

    for (let i = 0; i < array1AfterTake.length; i++) {
        let element = array1AfterTake[i];

        if (element === searchedNumber) {
            counter++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
