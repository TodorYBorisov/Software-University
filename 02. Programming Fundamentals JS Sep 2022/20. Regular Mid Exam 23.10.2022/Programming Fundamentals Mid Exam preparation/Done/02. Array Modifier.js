function arrayModifier(array) {

    let arrayToChange = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'end') {
            break;
        }

        let currentAction = command.split(' ');
        let currentCommand = currentAction[0]

        if (currentCommand === 'swap') {
            let index1 = Number(currentAction[1]);
            let index2 = Number(currentAction[2]);

            let move1stElement = arrayToChange.slice(index1, index1 + 1).join();
            let moove2ndElement = arrayToChange.slice(index2, index2 + 1).join();

            arrayToChange.splice(index1, 1, moove2ndElement);
            arrayToChange.splice(index2, 1, move1stElement);
        } else if (currentCommand === 'multiply') {
            let index1 = Number(currentAction[1]);
            let index2 = Number(currentAction[2]);

            let a = Number(arrayToChange[index1]);
            let b = Number(arrayToChange[index2]);
            let product = a * b;

            arrayToChange.splice(index1, 1, product);
        } else if (currentCommand === 'decrease') {

            let arrayToNumbers = arrayToChange.map(Number).map(x => x - 1);
            
            arrayToChange = arrayToNumbers
        }

    }
    console.log(arrayToChange.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
)