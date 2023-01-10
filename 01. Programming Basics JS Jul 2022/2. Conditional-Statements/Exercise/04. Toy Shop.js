function toyShop(input) {

    let priceOfTheExcursion = Number(input[0]);
    let numOfPuzzles = Number(input[1]);
    let numOfTalkingDolls = Number(input[2]);
    let numOfTedyBears = Number(input[3]);
    let numOfMinions = Number(input[4]);
    let numOfTrucks = Number(input[5]);

    let puzzel = 2.6;
    let talkingDoll = 3.0;
    let teddyBear = 4.10;
    let minion = 8.20;
    let truck = 2.0;

    let numOfToys = numOfPuzzles + numOfTalkingDolls + numOfTedyBears + numOfMinions + numOfTrucks;
    let sumOfToys = (numOfPuzzles * puzzel) + (numOfTalkingDolls * talkingDoll) + (numOfTedyBears * teddyBear) + (numOfMinions * minion) + (numOfTrucks * truck);

    let discount = 0;

    if (numOfToys >= 50) {
        discount = sumOfToys * 0.25;
        sumOfToys = sumOfToys - discount
    }

    let rent = sumOfToys * 0.1;

    let finalSum = sumOfToys - rent;

    if (finalSum >= priceOfTheExcursion) {
        let moneyLeft = finalSum - priceOfTheExcursion;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

    }
    else {
        let moneyNeeded = priceOfTheExcursion - finalSum;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)

    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])