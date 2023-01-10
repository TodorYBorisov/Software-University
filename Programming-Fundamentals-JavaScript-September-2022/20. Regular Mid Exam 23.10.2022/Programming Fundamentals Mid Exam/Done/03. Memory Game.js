function memoryGame(array) {

    let elements = array.shift().split(' ')//.map(Number);
    let moves = 0
    let remove = [];
    let command = array.shift();

    while (command !== 'end') {

        let actualIndexes = command.split(' ')
        let index1 = Number(actualIndexes[0]);
        let index2 = Number(actualIndexes[1]);
        moves++;
        if (index1 === index2 || index1 < 0 || index2 < 0 || index1 > elements.length || index2 > elements.length) {
            let middle = elements.length / 2;

            let symbolToAdd = '-' + moves + 'a';
            elements.splice(middle, 0, symbolToAdd, symbolToAdd)

            console.log(`Invalid input! Adding additional elements to the board`);
        } else {

            if (elements[index1] === elements[index2]) {

                if (index1 > index2) {

                    remove = elements.splice(index2, 1)
                    remove = elements.splice(index1 - 1, 1)
                } else {
                    remove = elements.splice(index1, 1)
                    remove = elements.splice(index2 - 1, 1)
                }

                console.log(`Congrats! You have found matching elements - ${remove[0]}!`);

                if (elements.length === 0 || elements.length === 1) {
                    console.log(`You have won in ${moves} turns!`);
                    return;
                }


            } else {
                console.log(`Try again!`);
            }
        }
        command = array.shift();
    }

    if (elements.length > 1) {
        console.log(`Sorry you lose :(`);
        console.log(`${elements.join(' ')}`);
    }
}

memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);



















function solve(input) {

    const numbers = input
        .shift()
        .trim()
        .split(' ');
    let moves = 0;

    while (numbers.length > 1 && input[0].toLowerCase() !== 'end') {
        let [index1, index2] = input
            .shift()
            .split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        moves++;
        if (index1 < 0 || index1 >= numbers.length || index1 === index2 || index2 < 0 || index2 >= numbers.length) {
            const index = Math.trunc(numbers.length / 2);
            const symbol = '-' + moves + 'a';
            numbers.splice(index, 0, symbol, symbol);
            console.log('Invalid input! Adding additional elements to the board')
        }
        else {
            const num1 = numbers[index1];
            const num2 = numbers[index2];
            if (num1 === num2) {
                numbers.splice(index1, 1);
                index2 = numbers.indexOf(num2);
                numbers.splice(index2, 1);
                console.log(`Congrats! You have found matching elements - ${num1}!`);
            } else if (num1 !== num2) {
                console.log('Try again!');
            }
        }
    }
    if (numbers.length === 0 || numbers.length === 1) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${numbers.join(' ')}`);
    }

}
// solve( [
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
//     ]
//     )