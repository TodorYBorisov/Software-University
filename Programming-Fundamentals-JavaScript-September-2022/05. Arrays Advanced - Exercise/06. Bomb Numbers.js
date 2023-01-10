function bombNumbers(numbers, bombNumbers) {

    let bomb = bombNumbers[0]
    let power = bombNumbers[1];
    let sum = 0;

    while (numbers.includes(bomb)) {
        let indexBomb = numbers.indexOf(bomb);
        let elementsToRemove = power * 2 + 1;
        let startIndex = indexBomb - power;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        numbers.splice(startIndex, elementsToRemove);
    }

    for (let num of numbers) {
        sum += num;
    }

    console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    );