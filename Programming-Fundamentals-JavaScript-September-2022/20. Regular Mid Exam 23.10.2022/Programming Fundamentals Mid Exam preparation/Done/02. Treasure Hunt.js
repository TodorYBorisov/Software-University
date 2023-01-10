function treasureHunt(array) {

    let initialLoot = array.shift().split('|');
    let command = array.shift();

    while (command !== 'Yohoho!') {

        let current = command.split(' ');
        let action = current.shift()

        if (action === 'Loot') {

            for (let i = 0; i < current.length; i++) {

                if (!initialLoot.includes(current[i])) {
                    initialLoot.unshift(current[i]);
                }
            }
        } else if (action === 'Drop') {
            let index = Number(current[0])
            if (index >= 0 && index < initialLoot.length) {
                let move = initialLoot.splice(index, 1).join();
                initialLoot.push(move)
            }
        } else if (action === 'Steal') {
            let count = Number(current[0]);
            let stolenItems = initialLoot.splice(-(count))

            console.log(stolenItems.join(', '))
        }

        command = array.shift();
    }

    let initialLootLength = initialLoot.map(x => x.length);

    let sum = 0
    for (let number of initialLootLength) {
        sum += number
    }
    let averageTreasure = sum / (initialLootLength.length);

    if (initialLootLength.length === 0) {
        console.log(`Failed treasure hunt.`);
    }else{
        console.log(`Average treasure gain: ${averageTreasure.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);