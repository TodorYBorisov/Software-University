function aggregateElements(array) {

    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let num of array) {
        sum += Number(num);
        concat += num;
    }

    for (let numArr of array) {
        inverseSum += (1 / Number(numArr));
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat)
}
aggregateElements([2, 4, 8, 16])