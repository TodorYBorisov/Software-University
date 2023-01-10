function degustationParty(array) {

    let countUnlikedMeals = 0;
    let guestInfo = {};

    let command = array.shift();

    while (command !== 'Stop') {

        let action = command.split('-');

        if (action[0] === 'Like') {

            let guestName = action[1];
            let meal = action[2]

            if (!guestInfo[guestName]) {
                guestInfo[guestName] = [];
            }

            if (!guestInfo[guestName].includes(meal)) {
                guestInfo[guestName].push(meal)
            }

        } else if (action[0] === 'Dislike') {

            let guestName = action[1];
            let meal = action[2]

            if (!guestInfo[guestName]) {
                console.log(`${guestName} is not at the party.`);

            } else {

                if (guestInfo[guestName].includes(meal)) {
                    let idexMeal = guestInfo[guestName].indexOf(meal)
                    guestInfo[guestName].splice(idexMeal, 1)
                    countUnlikedMeals++;
                    console.log(`${guestName} doesn't like the ${meal}.`);
                } else {
                    console.log(`${guestName} doesn't have the ${meal} in his/her collection.`);
                }
            }
        }

        command = array.shift();
    }

    for (let name in guestInfo) {

        let mealList = '';
        for (const meal of guestInfo[name]) {
            mealList += `${meal}, `
        }

        let charIndex = mealList.lastIndexOf(',')

        mealList = mealList.substring(0, charIndex)

        console.log(`${name}: ${mealList}`);
    }
    console.log(`Unliked meals: ${countUnlikedMeals}`);
}
degustationParty(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"]);
degustationParty(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"]);
degustationParty(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"]);





