function sortingNumbers(array) {

    let result = [];

    array = array.sort((a, b) => a - b);

    while (array.length !== 0) {

        result.push(array.shift());
        result.push(array.pop());
    }

    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);