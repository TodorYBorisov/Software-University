function equalSum(array) {

    let foundIndex = 'no';
    let arrLength = array.length;

    for (let i = 0; i < arrLength; i++) {
        let rightSum = 0;
        let leftSum = 0;
        for (let left = 0; left < i; left++) {
            leftSum += array[left];

        }
        for (let right = i+1; right < arrLength; right++) {
            rightSum += array[right];

        }
        if (leftSum === rightSum) {
            foundIndex = i
        }

    }
    console.log(foundIndex);
}
equalSum([1, 2, 3, 3]);