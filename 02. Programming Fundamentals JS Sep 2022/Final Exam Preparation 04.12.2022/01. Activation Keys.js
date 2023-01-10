function activationKey(array) {

    let key = array.shift().toString().split('')

    let command = array.shift();

    while (command !== 'Generate') {
        let action = command.split('>>>');

        let currentCommand = action[0];

        if (currentCommand === 'Slice') {
            let index1 = Number(action[1]);
            let index2 = Number(action[2]);
            let sliced = key.splice(index1, index2 - index1)
            console.log(key.join(''));

        } else if (currentCommand === 'Flip') {
            if (action[1] === 'Upper') {

                let index1 = Number(action[2]);
                let index2 = Number(action[3]);
                for (let i = index1; i < index2; i++) {
                    key[i] = key[i].toUpperCase();
                }
                console.log(key.join(''));
            } else if (action[1] === 'Lower') {
                let index1 = Number(action[2]);
                let index2 = Number(action[3]);
                for (let i = index1; i < index2; i++) {
                    key[i] = key[i].toLowerCase();
                }
                console.log(key.join(''));
            }
        } else if (currentCommand === 'Contains') {
            let substring = action[1];

            if (!key.join('').includes(substring)) {
                console.log(`Substring not found!`);
            } else {
                console.log(`${key.join('')} contains ${substring}`)
            }
        }
        command = array.shift('');
    }
    console.log(`Your activation key is: ${key.join('')}`);
}
activationKey(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);