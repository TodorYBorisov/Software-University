function movingTargets(array) {

    let targets = array.shift().split(' ').map(Number)

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'End') {
            break;
        }

        let action = command.split(' ');
        let index = Number(action[1]);

        if (action[0] === 'Shoot') {

            let power = Number(action[2]);
            let indexValue = targets[index] - power;

            if (index >= 0 && index < targets.length) {
                if (indexValue <= 0) {
                    targets.splice(index, 1)
                } else {
                    targets.splice(index, 1, indexValue)
                }
            }
        } else if (action[0] === 'Add') {
            let insertValue = Number(action[2]);
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, insertValue);
            } else {
                console.log('Invalid placement!');
            }
        } else if (action[0] === 'Strike') {
            let radius = Number(action[2]);
            let elementsToRemove = radius * 2 + 1
            let startIndex = index - radius;

            if (startIndex >= 0 && index + radius < targets.length) {
                targets.splice(startIndex, elementsToRemove)
            } else {
                console.log('Strike missed!')
            }
        }
    }

    console.log(targets.join('|'));
}
movingTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
