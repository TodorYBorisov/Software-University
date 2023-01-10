function activationKey(array) {

    let key = array.shift();

    let command = array.shift();

    while (command !== 'Generate') {

        let currentComand = command.split('>>>');
        let action = currentComand[0];

        if (action === 'Contains') {
            let substring = currentComand[1];

            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (action === 'Flip') {
            let toUpper = currentComand[1];

            if (toUpper === 'Upper') {

                let startIndex = Number(currentComand[2]);
                let endIndex = Number(currentComand[3]);
                let start = key.substring(0, startIndex);
                let middle = key.substring(startIndex, endIndex);
                let end = key.substring(endIndex);

                middle = middle.toUpperCase()
                key = start + middle + end;
                console.log(key);
            } else {
                let startIndex = Number(currentComand[2]);
                let endIndex = Number(currentComand[3]);
                let start = key.substring(0, startIndex);
                let middle = key.substring(startIndex, endIndex);
                let end = key.substring(endIndex);

                middle = middle.toLowerCase()
                key = start + middle + end;
                console.log(key);
            }
        } else if (action === 'Slice') {

            let startIndex = Number(currentComand[1]);
            let endIndex = Number(currentComand[2]);

            let start = key.substring(0, startIndex);
            let end = key.substring(endIndex);
            key = start + end;
            console.log(key);
        }

        command = array.shift();
    }
    console.log(`Your activation key is: ${key}`);
}
activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);