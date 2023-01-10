function shootForTheWin(array) {

    let targets = array.shift().split(' ').map(Number);
    let shotTargetCounter = 0;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'End') {
            break;
        }

        let currentIndex = Number(command);

        if (currentIndex >= 0 && currentIndex < targets.length) {

            for (let j = 0; j < targets.length; j++) {

                let currentTarget = targets[currentIndex];

                if (j !== currentIndex && targets[j] !== -1) {

                    if (targets[j] > currentTarget) {
                        targets[j] -= currentTarget;
                    } else {
                        targets[j] += currentTarget;
                    }
                }
            }

            targets[currentIndex] = -1;
            shotTargetCounter++;
        }
    }

    console.log(`Shot targets: ${shotTargetCounter} -> ${targets.join(" ")}`);
}




shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])