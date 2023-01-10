function heartDelivery(array) {

    let houses = array.shift().split('@').map(Number);
    let neededHeart = 2
    let command = array.shift();
    let actualIndex = 0

    while (command !== 'Love!') {

        let currentCommand = command.toString().split(' ')
        let realCommand = currentCommand[0];
        let index = Number(currentCommand[1]);

        actualIndex += index

        if (actualIndex >= houses.length) {
            actualIndex = 0
        }
        if (houses[actualIndex] === 0) {
            console.log(`Place ${actualIndex} already had Valentine's day.`);
        } else {
            houses[actualIndex] -= neededHeart;
            if (houses[actualIndex] === 0) {
                console.log(`Place ${actualIndex} has Valentine's day.`);
            }
        }

        command = array.shift();
    }

    console.log(`Cupid's last position was ${actualIndex}.`);

    let isSuccess = true;
    let count = 0;

    for (let house of houses) {
        if (house !== 0) {
            isSuccess = false;
            count++;
        }
    }

    if (isSuccess) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }

}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);
