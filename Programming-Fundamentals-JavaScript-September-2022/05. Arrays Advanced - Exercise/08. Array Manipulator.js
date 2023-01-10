function arrayManipulator(arrayNumbers, commands) {

    let manipulatedArray = arrayNumbers.slice();
    let newArray = [];


    for (let i = 0; i < commands.length; i++) {
        let element = (commands[i]).split(' ');

        let action = element[0];
        let index = Number(element[1]);
        let number = Number(element[2]);

        if (action === 'add') {
            manipulatedArray.splice(index, 0, number)
        } else if (action == 'addMany') {
            let groupToAdd = element.slice(2);

            for (let k = 0; k < groupToAdd.length; k++) {
                let element = Number(groupToAdd[k]);
                manipulatedArray.splice(index + k, 0, (element))
            }
        } else if (action === 'contains') {
            console.log(manipulatedArray.indexOf(index))
        } else if (action === 'remove') {

            manipulatedArray.splice(index, 1)
        } else if (action === 'shift') {

            for (let j = 0; j < index; j++) {
                let elementToMove = manipulatedArray[0];

                manipulatedArray.shift(elementToMove)
                manipulatedArray.push(elementToMove)
            }

        } else if (action === 'sumPairs') {

            for (let i = 0; i < manipulatedArray.length; i++) {
                let element = manipulatedArray[i] + manipulatedArray[i + 1];
                newArray.push(element);
                i++;

            }

            manipulatedArray = newArray;
            newArray = [];

        } else if (action === 'print') {
            console.log(`[ ${manipulatedArray.join(', ')} ]`)
        }
    }
}

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    , ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);