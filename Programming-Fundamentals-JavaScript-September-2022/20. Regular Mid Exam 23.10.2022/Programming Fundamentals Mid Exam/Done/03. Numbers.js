function numbers(array) {

    let numbers = array.split(' ').map(Number);
    let length = numbers.length;
    let sum = 0;
    for (let num of numbers) {
        sum += num
    }
    let avg = sum / length;

    let greaterThanAvg = [];

    for (let number of numbers) {

        if (number > avg) {
            greaterThanAvg.push(number)
        }
    }

    let sortDecending = greaterThanAvg.sort((a, b) => b - a);
    let firstFive = sortDecending.splice(0, 5)

    if (firstFive.length === 0) {
        console.log(`No`);
    } else {
        console.log(firstFive.join(' '))
    }

}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')