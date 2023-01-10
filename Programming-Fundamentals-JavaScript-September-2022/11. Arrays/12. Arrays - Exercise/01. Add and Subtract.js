function addAndSubstarct(numbers) {

    let sum1Array = 0;
    let newArray = [];

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);

        sum1Array += numbers[i];

        if (numbers[i] % 2 == 0) {
            newArray.push(numbers[i] + i);
        } else {
            newArray.push(numbers[i] - i)
        }

    }

    let sumOfNewArray = 0;
    for (const number of newArray) {

        sumOfNewArray += number;
    }

    console.log(newArray);
    console.log(sum1Array);
    console.log(sumOfNewArray)
}

addAndSubstarct([-5, 11, 3, 0, 2]);