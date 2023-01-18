function biggerHalf(array) {

    let sorted = array.sort((a, b) => a - b);

    let startIndex = Math.floor(sorted.length / 2);

    let arrayHalf= sorted.splice(startIndex);

    console.log(arrayHalf);
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);