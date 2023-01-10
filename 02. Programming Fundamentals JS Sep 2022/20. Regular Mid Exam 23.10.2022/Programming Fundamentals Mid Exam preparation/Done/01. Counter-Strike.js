function counterStrike(array) {
    let index=0
    let energy = Number(array[index]);
    index++
    let command = array[index];
    index++
    
    let won = 0
    while (command !== 'End of battle') {

        if (energy >= Number(command)) {
            won++;
            energy -= Number(command);

            if (won % 3 == 0) {
                energy += won
            }
        } else {
            console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`);
            return;
        }

        command = array[index];
        index++;
    }

    console.log(`Won battles: ${won}. Energy left: ${energy}`);
}
    counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);
    