function manOWar(command) {

    let piratShip = command.shift().split('>').map(Number);
    let warShip = command.shift().split('>').map(Number);
    let maximumHealth = Number(command.shift());

    let currentCommand = command.shift();

    while (currentCommand !== 'Retire') {

        let action = currentCommand.split(' ');

        if (action[0] === 'Fire') {

            let index = Number(action[1]);
            let damage = Number(action[2]);

            if (index >= 0 && index < warShip.length) {

                warShip[index] -= damage;

                if (warShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }

        } else if (action[0] === 'Defend') {
            let startIndex = Number(action[1]);
            let endIndex = Number(action[2]);
            let damage = Number(action[3]);

            if (startIndex >= 0 && startIndex < piratShip.length && endIndex >= startIndex && endIndex < piratShip.length && damage >= 0) {

                for (let i = startIndex; i <= endIndex; i++) {
                    piratShip[i] -= damage;

                    if (piratShip[i] <= 0) {

                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    } else {
                        continue;
                    }
                }
            }
        } else if (action[0] === 'Repair') {

            let index = Number(action[1]);
            let health = Number(action[2]);

            if (index >= 0 && index < piratShip.length) {



                if (piratShip[index] + health < maximumHealth) {
                    piratShip[index] += health;
                } else {
                    piratShip[index] = maximumHealth
                }
            }
        } else if (action[0] === 'Status') {
            let needRepairCounter = 0;

            let needRepair = maximumHealth * 0.2;

            for (let i = 0; i < piratShip.length; i++) {

                if (piratShip[i] < needRepair) {
                    needRepairCounter++;
                }
            }
            console.log(`${needRepairCounter} sections need repair.`);
        }
        currentCommand = command.shift();
    }

    let pirateShipSum = 0;
    for (let num1 of piratShip) {
        pirateShipSum += num1;
    }
    let warShipSum = 0;
    for (let num2 of warShip) {
        warShipSum += num2;
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}


manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
// manOWar(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"])
