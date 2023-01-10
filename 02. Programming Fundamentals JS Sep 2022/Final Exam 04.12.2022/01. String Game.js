function stringGame(array) {

    let string = array.shift();

    let command = array.shift();

    while (command !== 'Done') {

        let action = command.split(' ');

        if (action[0] === 'Change') {

            let char = action[1];
            let replacement = action[2];

            if (string.includes(char)) {
                string = string.split(char).join(replacement)
                console.log(string);
            } else {
                console.log(string);
            }
        } else if (action[0] === 'Includes') {

            let substringToCheck = action[1];

            if (string.includes(substringToCheck)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (action[0] === 'End') {

            let substringToCheck = action[1];
            let length = substringToCheck.length;
            let lastTwoChars = string.slice(-length)

            if (lastTwoChars === substringToCheck) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (action[0] === 'Uppercase') {

            string = string.toUpperCase();
            console.log(string);

        } else if (action[0] === 'FindIndex') {

            let char = action[1];
            let index = string.indexOf(char);

            console.log(index);

        } else if (action[0] === 'Cut') {

            let startIndex = Number(action[1]);
            let count = Number(action[2]);

            let firstHalf = string.substring(0, startIndex);
            let removedPart = string.substring(startIndex, startIndex + count);
            let endHalf = string.substring(startIndex + count)

            console.log(removedPart)
        }

        command = array.shift();
    }
}
stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);