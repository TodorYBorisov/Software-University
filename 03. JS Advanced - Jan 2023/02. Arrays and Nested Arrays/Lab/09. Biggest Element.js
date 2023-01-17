function biggestElemnt(array) {

    let biggestEl = Number.MIN_SAFE_INTEGER;

    for (let row of array) {
        for (let element of row) {

            if (element > biggestEl) {
                biggestEl = element;
            }
        }
    }
    return biggestEl;
}

console.log(biggestElemnt([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));