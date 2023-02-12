function subSum(array, startIndex, endIndex) {

    if ((Array.isArray(array)) == false) {
        return NaN;
    }
    array = array.map(Number);
    let sum = 0;

    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    array = array.slice(startIndex, endIndex + 1);
    for (let num of array) {
        sum += num;
    }

    return sum;
}




subSum([10, 20, 30, 40, 50, 60], 3, 300);