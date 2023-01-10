function pirates(array) {

    let cities = {};

    let command = array.shift();

    while (command !== 'Sail') {

        let [town, people, gold] = command.split('||');

        if (!cities[town]) {

            cities[town] = {
                population: Number(people),
                gold: Number(gold),
            }
        } else {
            cities[town].population += Number(people);
            cities[town].gold += Number(gold);
        }
        command = array.shift();
    }

    while (command !== 'End') {

        let action = command.split('=>');

        if (action[0] === 'Plunder') {

            let town = action[1];
            let people = Number(action[2])
            let gold = Number(action[3]);

            cities[town].population -= Number(people);
            cities[town].gold -= Number(gold)

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[town].population <= 0 || cities[town].gold <= 0) {

                console.log(`${town} has been wiped off the map!`);

                delete cities[town];
            }

        } else if (action[0] === 'Prosper') {

            let town = action[1];
            let gold = Number(action[2]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else if (gold > 0) {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }

        command = array.shift();
    }

    let count = Object.keys(cities).length;

    if (count !== 0) {

        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);

        for (let town in cities) {
            console.log(`${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`);
        }

    } else if (count === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);