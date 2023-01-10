function plantDiscovery(array) {

    let number = Number(array.shift());

    let arrayPlants = array.splice(0, number);

    let plants = {};

    for (let line of arrayPlants) {

        let [name, rarity] = line.split('<->');

        if (!plants[name]) {
            plants[name] = {
                rarity: Number(rarity),
                rating: []
            }
        } else {
            plants[name].rarity = Number(rarity);
        }
    }
    let commands = array.shift();

    while (commands !== 'Exhibition') {

        let action = commands.split(' ');

        if (!plants[action[1]]) {
            console.log(`error`);
        } else {

            if (action[0] === 'Rate:') {

                let name = action[1];
                let rating = Number(action[3]);

                plants[name].rating.push(rating)
            } else if (action[0] === 'Update:') {

                let name = action[1];
                let newRarity = Number(action[3]);
                plants[name].rarity = newRarity;

            } else if (action[0] === 'Reset:') {

                let name = action[1];
                plants[name].rating = [];
            }
        }
        commands = array.shift();
    }
    console.log(`Plants for the exhibition:`);

    for (let key in plants) {

        let sum = 0;
        let avgRating = 0;

        for (let rating of plants[key].rating) {
            sum += rating;
        }

        if (sum === 0) {
            avgRating = sum.toFixed(2);
        } else {
            avgRating = (sum / plants[key].rating.length).toFixed(2)
        }
        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${avgRating}`);
    }
}


// plantDiscovery(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);
