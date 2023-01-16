function extractIncreaseSubsequenceFromArray(array) {

    let maxNumber = array[0];
    let newArray = [];

    for (let i = 0; i < array.length; i++) {

        let number = array[i];

        if (number >= maxNumber) {
            maxNumber = number;
            newArray.push(number);
        }
    }
   return newArray;
}
extractIncreaseSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreaseSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
extractIncreaseSubsequenceFromArray([1, 2, 3,4]);