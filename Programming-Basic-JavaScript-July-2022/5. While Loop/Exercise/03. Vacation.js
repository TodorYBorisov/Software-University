function vacation(input) {
    let index = 0;

    let moneyNeeded = Number(input[index]);
    index++;

    let moneyNow = Number(input[index]);
    index++;

    let spendDayCounter = 0;
    let daysCounter = 0;


    while (moneyNow < moneyNeeded && spendDayCounter < 5) {

        let action = input[index];
        index++;

        let amountToAction = Number(input[index]);
        index++;

        if (action === "save") {
            moneyNow += amountToAction;
            spendDayCounter = 0;
        } else if (action === "spend") {
            spendDayCounter++;
            moneyNow -= amountToAction;
        }
        if (moneyNow < 0) {
            moneyNow = 0;
        }

        daysCounter++;

    }

    if (moneyNeeded <= moneyNow) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }

    if (spendDayCounter === 5) {
        console.log("You can't save the money.");
        console.log(daysCounter);
    }

}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);